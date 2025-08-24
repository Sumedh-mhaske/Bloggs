import { Hono } from "hono";
import { verify } from "hono/jwt";

export const blogRouter = new Hono<{
  Bindings: {
    DATABASE_URL: string;
    JWT_SECRET: string;
  };
}>();

blogRouter.use("/*", async (c, next) => {
  const header = c.req.header("Authorization") || "";
  const token = header.split(" ")[1];

  const res = await verify(token, c.env.JWT_SECRET);

  if (res.id) {
    next();
  } else {
    c.status(403);
    return c.json({ error: "Unauthorized" });
  }
});

blogRouter.get("/:id", (c) => {
  return c.text("Hello Hono");
});

blogRouter.post("/", (c) => {
  return c.text("Hello from blogs post");
});

blogRouter.put("/", (c) => {
  return c.text("Hello from blogs put");
});

blogRouter.get("/bulk", (c) => {
  return c.text("Hello from blogs bulk get");
});
