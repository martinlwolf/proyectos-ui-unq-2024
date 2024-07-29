package org.unq.ui

import bootstrap.Bootstrap
import io.javalin.Javalin
import io.javalin.apibuilder.ApiBuilder.*
import org.unq.ui.controller.*

import org.unq.ui.utils.enums.Roles


class Api {
    private val app: Javalin
    private val service = Bootstrap().getSystem()
    private val tokenController = TokenController(service.users)
    private val userController = UserController(tokenController::addToken, service)
    private val postController = PostController(service)
    private val trendsController = TrendsController(service)
    private val searchController = SearchController(service)

    init {
        app = Javalin.create { config ->
            config.http.defaultContentType = "application/json"
            config.bundledPlugins.enableCors { cors ->
                cors.addRule {
                    it.anyHost()
                    it.exposeHeader("Authorization")
                }
            }
            config.router.apiBuilder {
                path("/login") {
                    post(userController::login, Roles.ANYONE)
                }
                path("/register") {
                    post(userController::register, Roles.ANYONE)
                }
                path("/user") {
                    get(userController::getUser, Roles.USER)
                    put(userController::updateUser, Roles.USER)
                    path("/timeline") {
                        get(userController::getTimeLine, Roles.USER)
                    }
                    path("/{id}") {
                        get(userController::getUserById, Roles.ANYONE)
                        path("/follow") {
                            put(userController::updateFollow, Roles.USER)
                        }
                    }
                }
                path("/recommendedAccounts") {
                    get(userController::getRecommendedAccounts, Roles.USER)
                }
                path("/post") {
                    post(postController::addPost, Roles.USER)
                    path("/{id}") {
                        get(postController::getPost, Roles.ANYONE)
                        put(postController::updatePost, Roles.USER)
                        path("/comment") {
                            post(postController::addComment, Roles.USER)
                        }
                        path("/like") {
                            put(postController::addOrRemoveLike, Roles.USER)
                        }
                    }
                }
                path("/latestPosts") {
                    get(postController::latestPosts, Roles.ANYONE)
                }
                path("/search") {
                    get(searchController::getUserAndPost, Roles.ANYONE)
                }
                path("/trends") {
                    get(trendsController::getTopTrends, Roles.ANYONE)
                    path("/{name}") {
                        get(trendsController::getTrend, Roles.ANYONE)
                    }
                }
            }
        }
    }
    fun start(port: Int = 8080) {
        app.beforeMatched(tokenController::validate)
        app.start(port)
    }
}

fun main() {
    Api().start()
}