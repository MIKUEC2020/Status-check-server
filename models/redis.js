const config = require('../configs/config');
const Redis = require('ioredis');
const eventMessageRedis = new Redis(config.EVENT_MESSAGE_REDIS_PORT, config.EVENT_MESSAGE_REDIS_HOST);
const apiRedis = new Redis(config.API_CACHE_REDIS_PORT, config.API_CACHE_REDIS_HOST);
const sessionRedis = new Redis(config.SESSION_REDIS_PORT, config.SESSION_REDIS_HOST);

//Try reconnect to redis until successs
eventMessageRedis.on('error', (e) => {
    if(e.code == 'ECONNREFUSED'
        || e.code == 'ECONNRESET'
        || e.code == 'ENOTFOUND')
        return //console.log(e.message);
    console.error(e);
});

//Try reconnect to redis until successs
apiRedis.on('error', (e) => {
    if(e.code == 'ECONNREFUSED'
        || e.code == 'ECONNRESET'
        || e.code == 'ENOTFOUND')
        return //console.log(e.message);
    console.error(e);
});

//Try reconnect to redis until successs
sessionRedis.on('error', (e) => {
    if(e.code == 'ECONNREFUSED'
        || e.code == 'ECONNRESET'
        || e.code == 'ENOTFOUND')
        return //console.log(e.message);
    console.error(e);
});

module.exports = { eventMessageRedis, apiRedis, sessionRedis }
