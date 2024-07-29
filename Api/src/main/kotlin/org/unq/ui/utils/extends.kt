package org.unq.ui.utils

import io.javalin.http.Context
import io.javalin.http.UnauthorizedResponse
import model.User

fun Context.handleUser(callback: (user: User) -> Unit){
    val user = this.attribute<User>("user") ?: throw UnauthorizedResponse("token not valid")
    callback.invoke(user)
}