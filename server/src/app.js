const express = require('express');
const session = require('express-session');
const cors = require('cors');
require('dotenv').config();

const app = express()

app.use(cors());

app.use(
    session({
        secret: 'Moh@mm@d145623', // This should be a secret key for session encryption
        resave: false,
        saveUninitialized: true,
        cookie: {
            secure: false, // Set this to true in a production environment with HTTPS
            maxAge: 1000 * 60 * 60 * 24, // Session expiration time (1 day)
        },
    })
);

const port = process.env.CHATSERVERPORT;

app.listen(port, () => {
    console.log(`server running on port ${port}`);
    require('./router');
});

module.exports = {
    app
}