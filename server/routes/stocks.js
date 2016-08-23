const express = require('express');
const router = express.Router();
const request = require('request');

router.route('/lookup/:symbol')
 .get((req, res) =>{
  request(`http://dev.markitondemand.com/MODApis/Api/Lookup/json?input=${req.params.symbol}`,
    function(err, response, body) {
      if(err) console.log('err:', err);
      if(!err && response.statusCode == 200){
      }
      res.send(JSON.parse(body));
   });
});

router.route('/quote/:symbol')
 .get((req, res) =>{
  request(`http://dev.markitondemand.com/MODApis/Api/Quote/json?symbol=${req.params.symbol}`,
    function(err, response, body) {
      if(err) console.log('err:', err);
      if(!err && response.statusCode == 200){
      }
      res.send(JSON.parse(body));
   });
});

module.exports = router;
