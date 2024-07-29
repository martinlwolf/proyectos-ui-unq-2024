package org.unq.ui.utils.dtos

import exceptions.FollowException
import exceptions.PostException
import exceptions.UserException

class ErrorDTO {

    val message: String?

    constructor(error: UserException?) {
        message = error!!.message;
    }

    constructor(error: FollowException?) {
        message = error!!.message;
    }

    constructor(error: PostException?) {
        message = error!!.message;
    }
}