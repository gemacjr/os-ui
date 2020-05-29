const express = require('express');
const session = require('express-session');
const jwtDecoder = require('jwt-decode');


const app = express();
app.use(express.json());

app.use(session(
    {
        secret: 'some-secret',
        resave: false,
        saveUninitialized: false,
        cookie: {
            secure: 'auto',
            httpOnly: true,
            maxAge: 360000
        }
    }
));

app.use('/', require('./routes/login'));


app.use('/client', express.static('./react-app/build'));

const port = process.env.PORT || 3000;

app.listen(port, () => console.log(`Example app listening on port ${port}.`));