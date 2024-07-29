package org.unq.ui.utils.dtos

import model.Post

class SimplePostDTO(post: Post) {

    val id: String = post.id
    var user: SimpleUserDTO = SimpleUserDTO(post.user)
    var title:String = post.title
    var description: String = post.description
    var video: String = post.video
    var commentAmount: Int = post.comments.size
    val likes = post.likes.map { SimpleUserDTO(it) }
}
