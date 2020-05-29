const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {

     // I'm not sure where the token could be.
    // Find the JWT token here maybe res.header?? 
    //console.log(req.header);
    // after finding header set cookie??


   // const accessToken = req.header.access_token;
   // const decodedAccessToken = jwtDecoder(accessToken);
   const cookieOptions = {
    maxAge: 360000
};

// res.cookie('aep', accessToken, cookieOptions);

// redirect to the react app
    console.log('Req Headers ' + JSON.stringify(req.headers));
    console.log('Res Headers ' + JSON.stringify(res.headers));
    console.log('Session ' + JSON.stringify(req.session));

    res.redirect('/client');
});

module.exports = router;