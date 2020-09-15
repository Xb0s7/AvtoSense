const express = require('express');
const cookieParser = require('cookie-parser');
const cors = require('cors');
const secret = 'secret';

module.exports = (app) => {
    app.use(cors({
        exposedHeaders: 'Authorization'
    }));
    app.use(express.urlencoded({ extended: false }));
    app.use(express.json());
    app.use(cookieParser(secret));
};