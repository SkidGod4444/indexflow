import { Hono } from "hono";
import { handle } from "hono/vercel";
import { cors } from "hono/cors";
import { rateLimitHandler } from "@/actions/ratelimit-handler";
import { auth as Auth } from "@iflow/auth";
import { logger } from "hono/logger";
import user from "./routes/user";
import server from "./routes/bot/server";
import tag from "./routes/bot/tag";
import indexedQns from "./routes/bot/indexedQns";
import indexedAns from "./routes/bot/indexedAns";
import data from "./routes/data";
import config from "./routes/bot/config";
import questions from "./routes/questions";
import profile from "./routes/bot/profile";
import ping from "./routes/ping";
import stats from "./routes/bot/stats";
import vote from "./routes/vote";

export const runtime = "edge";
const app = new Hono().basePath("/v1");
const allowedOrigins = [
  "http://localhost:3000",
  "https://api.indexflow.site",
  "https://indexflow.site",
  "https://www.indexflow.site",
  "http://localhost:3001",
];
app.use(
  "*",
  cors({
    origin: allowedOrigins,
    allowMethods: ["GET", "POST", "PATCH", "DELETE", "OPTIONS", "PUT"],
    allowHeaders: ["Content-Type", "Authorization"],
    exposeHeaders: ["Content-Length"],
    maxAge: 600,
    credentials: true,
  }),
);

app.use(logger());
app.use(rateLimitHandler);

app.route("/bot/server/config", config);
app.route("/bot/server", server);
app.route("/bot/tag", tag);

app.route("/bot/index/qns", indexedQns);
app.route("/bot/index/ans", indexedAns);

app.route("/bot/stats", stats);
app.route("/bot/profile", profile);

app.route("/vote", vote);
app.route("/ping", ping);
app.route("/user", user);
app.route("/data", data);
app.route("/questions", questions);

app.on(["POST", "GET"], "/auth/*", (c) => Auth.handler(c.req.raw));

const GET = handle(app);
const POST = handle(app);
const PATCH = handle(app);
const DELETE = handle(app);
const OPTIONS = handle(app);
const PUT = handle(app);

export { GET, PUT, PATCH, POST, DELETE, OPTIONS };
