package org.unq.ui.utils.dtos

import model.User

class UserDTO(user: User) {

    val id: String = user.id
    var username: String = user.username
    val email: String = user.email
    var image: String = user.image
    val posts = user.posts.map {SimplePostDTO(it)}
    val following = user.following.map { SimpleUserDTO(it) }
    val followers = user.followers.map { SimpleUserDTO(it) }


}