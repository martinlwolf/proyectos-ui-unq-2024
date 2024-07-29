package org.unq.ui.controller

import bootstrap.Bootstrap
import exceptions.PostException
import io.javalin.http.Context
import org.unq.ui.utils.dtos.ErrorDTO
import org.unq.ui.utils.dtos.PostDTO
import service.TiktokSystem

class TrendsController(val service: TiktokSystem) {

    fun getTopTrends(ctx: Context) {
        ctx.json(service.getTopTrends());
    }
    fun getTrend(ctx: Context){
        val result = service.getTrend(ctx.pathParam("name"))
        if(result.isEmpty()){
            ctx.json(ErrorDTO(PostException("Trend name not exist")))
            ctx.status(404)
        } else {
            ctx.json(result.map{ PostDTO(it) })
        }
    }
}
