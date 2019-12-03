var express = require('express');
var router = express.Router();

router.post('/login', function(req, res, next) {
//   res.send('respond with a resource');
    res.json({
        data: true,
        message:"登录成功"
    })
});

module.exports = router;
