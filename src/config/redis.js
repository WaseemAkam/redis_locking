import { createClient } from "redis";

const redisUrl = process.env.REDIS_URL;

let redisClient;

if (redisUrl) {
  // For Render (Upstash Redis)
  redisClient = createClient({
    url: redisUrl,
    socket: {
      tls: true
    }
  });
} else {
  // For Local Redis
  redisClient = createClient({
    url: "redis://127.0.0.1:6379"
  });
}

redisClient.on("error", (err) => {
  console.error("Redis Error:", err);
});

const connectRedis = async () => {
  await redisClient.connect();
  console.log("✅ Redis Connected");
};

export { redisClient, connectRedis };