import { createClient } from 'redis';

const redisClient = createClient({
  url: process.env.REDIS_URL,
  socket: {
    tls: true
  }
});

redisClient.on('error', (err) => {
  console.error('Redis Error:', err);
});

const connectRedis = async () => {
  await redisClient.connect();
  console.log('✅ Redis Connected');
};

export { redisClient, connectRedis };