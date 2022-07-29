const express = require('express');
const expressAsyncHandler = require("express-async-handler");
const cors = require('cors');
const dotenv = require('dotenv');
const logger = require('./config/logger');
const apiRoute = require('./routes/api');


dotenv.config();

const app = express();

app.use(express.json());
app.use(cors());

app.use('/api', apiRoute);

app.get('/', expressAsyncHandler(async (req, res, next) => {
    res.status(200).send("Application is up and running");
}));

try {

    const PORT = process.env.PORT || 3001;

    app.listen(PORT, () => {
        logger.infoLogger.info(`Server running on port: ${PORT}`);
    });

} catch (error) {
    logger.errorLogger.error(`${error.message}`);
}