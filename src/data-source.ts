import "reflect-metadata"
import { DataSource } from "typeorm"

import { User } from "./entity/User"
import { getEnv } from "./util";

const { DB_HOST, DB_NAME, DB_PASSWORD, DB_PORT, DB_USERNAME } = getEnv();

export const AppDataSource = new DataSource({
    type: "mysql",
    host: DB_HOST,
    port: DB_PORT,
    username: DB_USERNAME,
    password: DB_PASSWORD,
    database: DB_NAME,
    synchronize: true,
    logging: false,
    entities: [User],
    migrations: [],
    subscribers: [],
})
