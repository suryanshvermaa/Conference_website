const rateLimit=require("express-rate-limit");

/**
 * @description Middleware to limit the number of requests from a single IP address.
 * @param {number} max - Maximum number of requests allowed within the time window.
 * @param {number} windowMs - Time window in milliseconds (e.g., 15 minutes = 15 * 60 * 1000).
 */
const loginLimiter = rateLimit({
    windowMs: 15 * 60 * 1000, // 15 minutes
    max: 5, // Limits each IP to 5 requests per windowMs
    message: {
        error: "Too many login attempts. Try again later."
    },
    standardHeaders: true, // Return rate limit info in the `RateLimit-*` headers
    legacyHeaders: false, // Disable the `X-RateLimit-*` headers
})

const contactLimiter = rateLimit({
    windowMs: 60 * 60 * 1000, // 1 hour
    max: 2, // Limits each IP to 20 requests per windowMs
    message: {
        error: "Too many contact form submissions. Try again later."
    }
});

module.exports = {
    loginLimiter,
    contactLimiter
};