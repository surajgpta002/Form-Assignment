import Fastify from "fastify";
import userRoutes from "./routes/formRoutes";
import { connectDB } from "./config/db";
import cors from "@fastify/cors";
import dotenv from "dotenv";

dotenv.config();

const PORT = process.env.PORT || 3000;
const server = Fastify({ logger: true });

connectDB();
server.register(userRoutes);

server.register(cors, {
  origin: "*",
  methods: ["GET", "POST", "PUT", "DELETE"],
});

server.get("/", async (request, reply) => {
  return { message: "Hello, Fastify with TypeScript!" };
});

const start = async () => {
  try {
    await server.listen({ port: Number(PORT) });
    console.log("Server running on http://localhost:3000");
  } catch (err) {
    server.log.error(err);
    process.exit(1);
  }
};

start();
