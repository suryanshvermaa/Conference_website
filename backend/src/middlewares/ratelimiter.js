const rateLimit=require("express-rate-limit");

/**
 * @description Middleware to limit the number of requests from a single IP address.
 * @param {number} max - Maximum number of requests allowed within the time window.
 * @param {number} windowMs - Time window in milliseconds (e.g., 15 minutes = 15 * 60 * 1000).
 */
const loginLimiter = rateLimit({
    windowMs: 15 * 60 * 1000,
    max: 5,
    message: {
        error: "Too many login attempts. Try again later."
    },
    standardHeaders: true,
    legacyHeaders: false,
    skipSuccessfulRequests: true,
    skipFailedRequests: false,
})

/**
 * @description Middleware to limit the number of contact form submissions from a single IP address.
 * @param {number} max - Maximum number of requests allowed within the time window.
 * @param {number} windowMs - Time window in milliseconds (e.g., 1 hour = 60 * 60 * 1000).
 */
const contactLimiter = rateLimit({
    windowMs: 60 * 60 * 1000,
    max: 10,
    message: {
        error: "Too many contact form submissions. Try again later."
    },
    standardHeaders: true,
    legacyHeaders: false,
});

module.exports = {
    loginLimiter,
    contactLimiter
};