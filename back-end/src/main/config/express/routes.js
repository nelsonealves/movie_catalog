import { makeCreateFilmController, makeGetFilmController } from '../../factories/controller/index.js'
import { adaptRoute } from "../../adapter/express/expressRouteAdapter.js"

export const setupRoutes = (router) => {
    router.post("/films", adaptRoute(makeCreateFilmController()))
    router.get("/films", adaptRoute(makeGetFilmController()))
}