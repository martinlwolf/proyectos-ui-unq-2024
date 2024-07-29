package org.unq.ui.utils.dtos

import model.SearchResult

class SearchResultDTO(searchResult: SearchResult) {

    val users = searchResult.users.map { SimpleUserDTO(it) }
    val posts = searchResult.posts.map { SimplePostDTO(it) }

}