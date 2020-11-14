module.exports = {
    EVENT_MESSAGE_REDIS_HOST: 'event-redis.vll-internal.com',
    EVENT_MESSAGE_REDIS_PORT: 6379,
    API_CACHE_REDIS_HOST: 'api-cache-redis.vll-internal.com',
    API_CACHE_REDIS_PORT: 6379,
    SESSION_REDIS_HOST: 'session-redis.vll-internal.com',
    SESSION_REDIS_PORT: 6379,
    SQL_USERNAME: 'vll',
    SQL_PASSWORD: 'mysql',
    SQL_DATABASE: 'vll_db',
    
    SEQUELIZE_CONFIG: {
        development: {
            username: "vll",
            password: "mysql",
            database: "vll_db",
            host: "127.0.0.1",
            dialect: "mysql",
            logging: false
        }
    }
}
