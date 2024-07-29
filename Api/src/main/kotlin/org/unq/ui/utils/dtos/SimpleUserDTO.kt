package org.unq.ui.utils.dtos

import model.User

class SimpleUserDTO(user: User) {
    val id: String = user.id
    var username: String = user.username
    var image: String = user.image
}