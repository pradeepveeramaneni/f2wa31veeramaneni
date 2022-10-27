var express = require('express');
var router = express.Router();


router.get('/',function(req,res,next) {
    var y = Math.random();
    var x;
    x = req.query.x;
    if(x==undefined)
    {
        x=y;
    }

  res.render('computation', { values: `f(${x}) is ${Math.log(x)}` });
});

module.exports = router;