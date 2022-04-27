const {createLogger, transports, format} = require("winston");
const {combine, colorize, label,timestamp, simple,printf} = format;
const printFormat = printf(({timestamp, level,message}) => {
    return `${timestamp} ${level} : ${message}`;
})

const printLogFormat = {
    file: combine(
    label({
        label : "백앤드 맛보기",

    }),
    timestamp({
        format: "YYYY-MM-DD HH:mm:dd",
    }),
    printFormat,
    ),
    console: combine(
        colorize(),
        simple(),
    )
};

const opts ={
    file: new transports.File({
        filename: "access.log",
        dirname: "./logs",
        level : "info",
        format: printLogFormat.file,}
        ), 
    console: new transports.Console({
        level: "info",
        format: printLogFormat.console,
        }),
}

const logger = createLogger({
    transports: [opts.file],
});

if(process.env.NODE_ENV !== "produciton")
{
    logger.add(opts.console);
}

logger.stream ={
    write: (message) =>
        logger.info(message),
}

module.exports = logger;