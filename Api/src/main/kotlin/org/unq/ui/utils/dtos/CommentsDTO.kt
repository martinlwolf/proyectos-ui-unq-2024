package org.unq.ui.utils.dtos

import model.Comment

class CommentsDTO(comment: Comment) {
    val id: String = comment.id
    val user: SimpleUserDTO = SimpleUserDTO(comment.user)
    val post: SimplePostDTO = SimplePostDTO(comment.post)
    val text: String = comment.text
}