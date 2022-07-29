import { loggers } from "winston";

const mongoose = require("mongoose");


const DB = async () =>
    await mongoose
        .connect(process.env.DB_CONNECTION_STRING)
        .then(() => {
            logger.infoLogger.info(`DB connection successful`);

        }).catch(err => {
            logger.errorLogger.error(err.message);
        });

export default DB;