const { createLogger, format, transports } = require('winston');
require('winston-daily-rotate-file');

const myFormat = format.printf(({ level, message, timestamp }) => {
    const log = `
-----
-----
${timestamp} - ${level} :: 
${message}
------
------`;
    return log;
});

const infoLogger = createLogger({
    level: 'info',
    format: format.combine(format.timestamp(), myFormat),
    transports: [
        new transports.DailyRotateFile({
            filename: './logs/info/%DATE%.log',
            datePattern: 'YYYYMMDD',
            maxSize: '500m',
            maxFiles: '30d'
        })
    ]
});

const errorLogger = createLogger({
    level: 'error',
    format: format.combine(format.timestamp(), myFormat),
    transports: [
        new transports.DailyRotateFile({
            filename: './logs/error/%DATE%.log',
            datePattern: 'YYYYMMDD',
            maxSize: '500m',
            maxFiles: '30d'
        })
    ]
});

const logger = {
    infoLogger,
    errorLogger
};

if (process.env.NODE_ENV !== 'production') {
    infoLogger.add(
        new transports.Console({
            format: format.combine(format.timestamp(), myFormat)
        })
    );

    errorLogger.add(
        new transports.Console({
            format: format.combine(format.timestamp(), myFormat)
        })
    );
}

module.exports = logger;
