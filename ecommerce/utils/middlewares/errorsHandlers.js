const Sentry = require("@sentry/node");
const Tracing = require("@sentry/tracing");

const { config } = require('../../config');

Sentry.init({
    dsn: `https://${config.sentryDns}@o880676.ingest.sentry.io/${config.sentryId}`,
    tracesSampleRate: 1.0,
  });
  

function logErrors(err, req, res, next) {
    Sentry.captureException(err);
    console.log(err.stack)
    next(err);
};

function clientErrorHandler(err, req, res, next) {
    if(req.xhr) {
        res.status(500).send({ err: err.message});
    } else {
        next(err);
    }
};

function errorHandler(err, req, res, next) {
    if(res.headerSent) {
        next(err);
    }
    if(!config.dev) {
        delete err.stack;
    }

    res.status(err.status || 500);
    res.render('error', { error: err });
};

module.exports = {
    logErrors,
    clientErrorHandler,
    errorHandler,
}

