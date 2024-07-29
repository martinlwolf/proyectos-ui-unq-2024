package org.unq.ui.controller

import bootstrap.Bootstrap
import drafts.DraftEditUser
import drafts.DraftUser
import exceptions.FollowException
import exceptions.UserException
import io.javalin.http.*
import model.User
import org.unq.ui.utils.bodies.EditUserBody
import org.unq.ui.utils.bodies.LoginBody
import org.unq.ui.utils.bodies.RegisterBody
import org.unq.ui.utils.dtos.ErrorDTO
import org.unq.ui.utils.dtos.PostDTO
import org.unq.ui.utils.dtos.UserDTO
import org.unq.ui.utils.handleUser
import service.TiktokSystem

class UserController(val addToken: (Context, User) -> Unit, val service: TiktokSystem) {

    private val tokenController = TokenController(service.users)

    fun login(ctx: Context) {
        try {
            val userBody = ctx.bodyValidator(LoginBody::class.java)
                .check({ it.username.isNotEmpty() }, "username was empty")
                .check({ it.password.isNotEmpty() }, "password was empty")
                .getOrThrow {
                    UserException("Not valid body")
                }
            val user = service.login(userBody.username, userBody.password)
            addToken(ctx, user)
            ctx.json(UserDTO(user))
        } catch (e: UserException) {
            ctx.json(ErrorDTO(e))
            ctx.status(400)
        }
    }

    fun getUser(ctx: Context) {

        ctx.handleUser { ctx.json(UserDTO(it)) }
    }

    fun getTimeLine(ctx: Context) {

        ctx.handleUser { user -> ctx.json(service.getTimeline(user.id).map { PostDTO(it) })}

    }

    fun register(ctx: Context) {
        try {
            val newUser = ctx.bodyValidator(RegisterBody::class.java)
                .check({ it.username.isNotEmpty() }, "username was empty")
                .check({ it.email.isNotEmpty() }, "email was empty")
                .check({ it.password.isNotEmpty() }, "password was empty")
                .check({ it.image.isNotEmpty() }, "image was empty")
                .getOrThrow { UserException("Not valid body") }
            val user = service.addUser(DraftUser(newUser.username, newUser.email, newUser.password, newUser.image))
            addToken(ctx, user)
            ctx.json(UserDTO(user))
        } catch (e: UserException) {
            ctx.json(ErrorDTO(e))
            ctx.status(400)
        }
    }

    fun getUserById(ctx: Context) {
        try {
            val id = ctx.pathParam("id")
            val user = service.getUser(id)
            ctx.json(UserDTO(user))
        } catch (e: UserException) {
            ctx.json(ErrorDTO(e))
            ctx.status(404)
        }
    }


    fun getRecommendedAccounts(ctx: Context) {
        ctx.handleUser { user ->
            val result = service.getRecommendAccounts(user.id).map { UserDTO(it) }
            ctx.json(result)
        }

    }


    fun updateUser(ctx: Context) {
        val emailRegex = Regex("^[a-zA-Z0-9._+-]+@[a-zA-Z0-9.-]+\\.[a-zA-Z]{2,}\$")
        ctx.handleUser {
            try {
                val body = ctx.bodyValidator(EditUserBody::class.java).getOrThrow {
                    throw UserException("Not valid body")
                }
                if (body.email.matches(emailRegex) && body.password.isNotEmpty() && body.image.isNotEmpty()){
                    val editedUser = DraftEditUser(body.email, body.password, body.image)
                    val result = service.editUser(it.id, editedUser)
                    ctx.json(UserDTO(result))
                } else {
                    throw UserException("Email not valid or password or image was empty")
                }
            } catch (e: UserException) {
                ctx.json(ErrorDTO(e))
                ctx.status(400)
            }
        }
    }

    fun updateFollow(ctx: Context) {
        val idOfUserToFollow = ctx.pathParam("id")

        ctx.handleUser {
            try {
                val userUpdate = service.updateFollow(it.id, idOfUserToFollow)
                ctx.json(UserDTO(userUpdate))
            } catch (e: FollowException) {
                ctx.json(ErrorDTO(e))
                ctx.status(400)
            } catch (e: UserException) {
                ctx.json(ErrorDTO(e))
                ctx.status(404)
            }
        }
    }
}