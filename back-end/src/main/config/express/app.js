import express from 'express'
import { setupRoutes } from './routes.js'
import cors from 'cors'
import swaggerUi from 'swagger-ui-express'
import swaggerFile from './swagger_output.json' assert { type: "json" }

export const setupApp = async () => {

    const app = express();
    app.use(cors())
    app.use(express.json())
    app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerFile))

    setupRoutes(app)

    return app


}