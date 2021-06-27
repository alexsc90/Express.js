const boom = require('boom')
// const Sentry = require("@sentry/node");

const { config } = require('../../config');
const isRequestAjaxOrApi = require('../isRequestAjaxOrApi.js')

/* 
Sentry.init({
    dsn: `https://${config.sentryDns}@o880676.ingest.sentry.io/${config.sentryId}`,
    tracesSampleRate: 1.0,
  }); 
  */
  
function withErrorStack(err, stack) {
    if(config.dev) {
        return { ...err, stack }
    }
}

function logErrors(err, req, res, next) {
    // Sentry.captureException(err);
    console.log(err.stack)
    next(err);
};

function wrapErrors(err, req, res, next) {
    if(!err.isBoom) {
        next(boom.badImplementation(500));
    }

    nexr(err);
}

function clientErrorHandler(err, req, res, next) {
    const {
        output: { statusCode, payload } 
    } = err

    if(isRequestAjaxOrApi(req) || res.headerSent) {
        res.status(statusCode).json(withErrorStack(payload, err.stack));
    } else {
        next(err);
    }
};

function errorHandler(err, req, res, next) {
    const {
        output: { statusCode, payload } 
    } = err

    res.status(statusCode);
    res.render('error', withErrorStack(payload, err.stack));
};

module.exports = {
    logErrors,
    wrapErrors,
    clientErrorHandler,
    errorHandler,
}

