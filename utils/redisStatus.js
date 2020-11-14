module.exports = redis => () => { return {
    connected: redis.status == 'ready',
    port: redis.options.port,
    host: redis.options.host
}};
