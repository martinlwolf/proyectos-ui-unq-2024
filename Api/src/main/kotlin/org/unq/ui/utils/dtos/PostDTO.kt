package org.unq.ui.utils.dtos

import model.Post

class PostDTO(post: Post) {

    val id: String = post.id
    var user: SimpleUserDTO = SimpleUserDTO(post.user)
    var title:String = post.title
    var description: String = post.description
    var video: String = post.video
    var comments = post.comments.map { CommentsDTO(it) }
    val likes = post.likes.map { SimpleUserDTO(it) }
}