import { Hono } from "hono";

const app = new Hono();

app.get("/api/v1/blog/:id", (c) => {
  return c.text("Hello Hono");
});

app.post("/api/v1/blog", (c) => {
  return c.text("Hello from blogs post");
});

app.put("/api/v1/blog", (c) => {
  return c.text("Hello from blogs put");
});

app.post("/api/v1/signup", (c) => {
  return c.text("Hello from signup post");
});

app.post("/api/v1/signin", (c) => {
  return c.text("Hello from signin post");
});

export default app;
