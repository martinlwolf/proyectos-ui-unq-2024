package org.unq.ui.controller

import bootstrap.Bootstrap
import io.javalin.http.Context
import model.Post
import model.SearchResult
import model.User
import org.unq.ui.utils.dtos.SearchResultDTO
import service.TiktokSystem

class SearchController(val service: TiktokSystem) {

    fun getUserAndPost(ctx: Context){
        val userNull = listOf<User>()
        val postNull = listOf<Post>()
        val text = ctx.queryParam("search")

        if (text==null) {
            ctx.json(SearchResultDTO(SearchResult(userNull, postNull)))
        } else {
            val searchResult = service.search(text)
            ctx.json(SearchResultDTO(searchResult))
        }
    }
}