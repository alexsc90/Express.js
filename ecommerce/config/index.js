require('dotenv').config();

const config = {
    sentryDns: process.env.SENTRY_DNS,
    sentryId: process.env.SENTRY_ID,
    dev: process.env.NODE_ENV !== 'production',
    port: process.env.PORT,
    dbUser: process.env.DB_USER,
    dbPassword: process.env.DB_PASS,
    dbHost: process.env.DB_HOST,
    dbName: process.env.DB_NAME,
};

module.exports = { config };


