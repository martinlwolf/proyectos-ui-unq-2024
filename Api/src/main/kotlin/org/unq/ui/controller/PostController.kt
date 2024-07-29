package org.unq.ui.controller

import bootstrap.Bootstrap
import io.javalin.http.Context
import org.unq.ui.utils.dtos.PostDTO


import drafts.DraftPost
import drafts.DraftComment
import exceptions.PostException
import exceptions.UserException
import io.javalin.http.*
import org.unq.ui.utils.bodies.CommentBody
import org.unq.ui.utils.bodies.PostBody
import org.unq.ui.utils.dtos.ErrorDTO
import org.unq.ui.utils.handleUser
import service.TiktokSystem


class PostController(val service: TiktokSystem) {


    fun getPost(ctx: Context) {
        val id = ctx.pathParam("id")
        try {
            val post = service.getPost(id)
            ctx.json(PostDTO(post))
        } catch (e: PostException) {
            ctx.json(ErrorDTO(e))
            ctx.status(404)
        }
    }


    fun addPost(ctx: Context) {
        try {
            val newPost = ctx.bodyValidator(PostBody::class.java)
                .check({ it.title.isNotEmpty() }, "title was empty")
                .check({ it.description.isNotEmpty() }, "description was empty")
                .check({ it.video.isNotEmpty() }, "video was empty")
                .getOrThrow { throw PostException("Error on body") }

            ctx.handleUser {
                val draftPost = DraftPost(newPost.title, newPost.description, newPost.video)
                val result = service.addPost(it.id, draftPost)
                ctx.json(PostDTO(result))
            }


        } catch (e: PostException) {
            ctx.json(ErrorDTO(e))
            ctx.status(400)
        }


    }

    fun addComment(ctx: Context) {

        try {
            val bodyComment = ctx.bodyValidator(CommentBody::class.java)
                .check({ it.text.isNotEmpty() }, "Error on body")
                .getOrThrow { throw BadRequestResponse("Error on body") }

            val postId = ctx.pathParam("id")
            val newComment = DraftComment(bodyComment.text)

            ctx.handleUser {
                val result = service.addComment(it.id, postId, newComment)
                ctx.json(PostDTO(result))
            }

        } catch (e: PostException) { // Error post id not found
            ctx.json(ErrorDTO(e))
            ctx.status(404)
        } catch (e: BadRequestResponse) { // error on body
            ctx.json(ErrorDTO(PostException(e.message!!)))
            ctx.status(400)
        }
    }

    fun updatePost(ctx: Context) {
        try {
            val editedPost = ctx.bodyValidator(PostBody::class.java)
                .check({ it.title.isNotEmpty() }, "title was empty")
                .check({ it.description.isNotEmpty() }, "description was empty")
                .check({ it.video.isNotEmpty() }, "video was empty")
                .getOrThrow { throw BadRequestResponse("Error body not valid") }

            val postId = ctx.pathParam("id")
            ctx.handleUser {
                val result = service.editPost(postId, it.id, DraftPost(editedPost.title, editedPost.description, editedPost.video))
                ctx.json(PostDTO(result))
            }
        } catch (e: BadRequestResponse) {
            ctx.json(ErrorDTO(PostException(e.message!!)))
            ctx.status(400)
        } catch (e: UserException) {
            ctx.json(ErrorDTO(e))
            ctx.status(400)
        } catch (e: PostException) {
            ctx.json(ErrorDTO(e))
            ctx.status(404)
        }
    }

    fun addOrRemoveLike(ctx: Context) {
        val postID = ctx.pathParam("id")

        ctx.handleUser {try {
            ctx.json(PostDTO(service.updateLike(it.id, postID)))
        } catch (e: PostException) { // error post not found
            ctx.json(ErrorDTO(e))
            ctx.status(404)
        } catch(e: UserException){ // error user not found
            ctx.json(ErrorDTO(e))
            ctx.status(404)
        }

        }

    }

    fun latestPosts(ctx: Context){
        ctx.json(service.getLatestPosts().map { PostDTO(it) })
    }
}