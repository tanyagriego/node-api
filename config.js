'use strict';
exports.DATABASE_URL = process.env.DATABASE_URL || 'mongodb://localhost/node-api-dev';
exports.PORT = process.env.PORT || 3000;
exports.JWT_SECRET = process.env.JWT_SECRET || 'secrets-dont-make-friends';
exports.JWT_EXPIRY = process.env.JWT_EXPIRY || '7d';
