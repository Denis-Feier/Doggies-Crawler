import * as express from 'express'
import * as cors from 'cors'
import * as dotenv from 'dotenv'
dotenv.config()

import { AppDataSource } from "./data-source"
import { getEnv } from './util'
import router from './router'

const { SERVER_PORT } = getEnv()

const startServer = () => {
    const { json, urlencoded } = express
    const app = express()
    app.use(cors())
    app.use(json())
    app.use(urlencoded({
        extended: true,
    }))
    app.use(router)
    app.listen(SERVER_PORT, () => {
        console.log(`Start server on port ${SERVER_PORT}`)
    })
}

const bootstrapApp = async () => {
    try {
        console.log('Init DB')
        await AppDataSource.initialize()
        startServer()
    } catch(e) {
        console.log(e)
    }
}

bootstrapApp().then()