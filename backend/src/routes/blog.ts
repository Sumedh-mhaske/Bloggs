import { PrismaClient } from "@prisma/client/edge";
import { withAccelerate } from "@prisma/extension-accelerate";
import { createBlogInput, updateBlogInput } from "@sumedh31/bloggs-common";
import { Hono } from "hono";
import { verify } from "hono/jwt";

export const blogRouter = new Hono<{
  Bindings: {
    DATABASE_URL: string;
    JWT_SECRET: string;
  };
  Variables: {
    userId: string;
  };
}>();

blogRouter.use("/*", async (c, next) => {
  const header = c.req.header("Authorization") || "";
  const token = header.startsWith("Bearer ") ? header.split(" ")[1] : header;

  const user = await verify(token, c.env.JWT_SECRET);

  if (user) {
    c.set("userId", String(user.id));
    await next();
  } else {
    c.status(403);
    return c.json({ error: "Unauthorized" });
  }
});

blogRouter.post("/", async (c) => {
  const prisma = new PrismaClient({
    datasourceUrl: c.env.DATABASE_URL,
  }).$extends(withAccelerate());

  const body = await c.req.json();
  const userId = c.get("userId");

  const { success } = createBlogInput.safeParse(body);

  if (!success) {
    c.status(411);
    return c.json({
      message: "Inputs not valid",
    });
  }

  try {
    const blog = await prisma.post.create({
      data: {
        title: body.title,
        content: body.content,
        authorId: userId,
      },
    });

    c.status(201);
    return c.json({ id: blog.id });
  } catch (err) {
    c.status(400);
    return c.text("Invalid" + err);
  }
});

blogRouter.put("/", async (c) => {
  const prisma = new PrismaClient({
    datasourceUrl: c.env.DATABASE_URL,
  }).$extends(withAccelerate());

  const body = await c.req.json();

  const { success } = updateBlogInput.safeParse(body);

  if (!success) {
    c.status(411);
    return c.json({
      message: "Inputs not valid",
    });
  }

  try {
    const blog = await prisma.post.update({
      where: {
        id: body.id,
      },
      data: {
        title: body.title,
        content: body.content,
        published: body.published,
      },
    });

    c.status(200);
    return c.json({ id: blog.id, message: "Info updated succesfully" });
  } catch (err) {
    c.status(400);
    return c.text("Invalid" + err);
  }
});

// User "skip" and "keep" for pagination

blogRouter.get("/bulk", async (c) => {
  const prisma = new PrismaClient({
    datasourceUrl: c.env.DATABASE_URL,
  }).$extends(withAccelerate());

  try {
    const blogs = await prisma.post.findMany({
      select: {
        content: true,
        title: true,
        id: true,
        author: {
          select: {
            name: true,
          },
        },
      },
    });

    c.status(200);
    return c.json({ blogs });
  } catch (err) {
    c.status(400);
    return c.text("Invalid" + err);
  }
});

blogRouter.get("/:id", async (c) => {
  const prisma = new PrismaClient({
    datasourceUrl: c.env.DATABASE_URL,
  }).$extends(withAccelerate());

  const id = c.req.param("id");

  try {
    const blog = await prisma.post.findUnique({
      where: {
        id: id,
      },
      select: {
        id: true,
        title: true,
        content: true,
        author: {
          select: {
            name: true,
          },
        },
      },
    });

    if (!blog) {
      c.status(404);
      return c.text("User not found");
    }

    c.status(200);
    return c.json({ blog });
  } catch (err) {
    c.status(400);
    return c.text("Invalid" + err);
  }
});
