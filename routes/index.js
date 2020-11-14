var express = require('express');
const {eventMessageRedis, apiRedis, sessionRedis} = require('../models/redis');
var router = express.Router();
const eventRedisStatus = require('../utils/redisStatus')(eventMessageRedis);
const apiRedisStatus = require('../utils/redisStatus')(apiRedis);
const sessionRedisStatus = require('../utils/redisStatus')(sessionRedis);

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Server status check', eventRedisStatus: eventRedisStatus(),
                                                    apiRedisStatus: apiRedisStatus(),
                                                    sessionRedisStatus: sessionRedisStatus()
                                                });
});

module.exports = router;
