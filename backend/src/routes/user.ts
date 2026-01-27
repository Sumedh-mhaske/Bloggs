import { Hono } from "hono";
import { PrismaPg } from "@prisma/adapter-pg";
import { PrismaClient } from "../generated/prisma";
import { withAccelerate } from "@prisma/extension-accelerate";
import { sign, verify } from "hono/jwt";
import { signinInput, signupInput } from "@sumedh31/bloggs-common";

export const userRouter = new Hono<{
  Bindings: {
    DATABASE_URL: string;
    JWT_SECRET: string;
  };
}>();

userRouter.post("/signin", async (c) => {
  const adapter = new PrismaPg({ connectionString: c.env.DATABASE_URL });

  const prisma = new PrismaClient({ adapter }).$extends(withAccelerate());

  const body = await c.req.json();
  const { success } = signinInput.safeParse(body);

  if (!success) {
    return c.json({ message: "Invalid inputs" }, 400);
  }

  try {
    // ✅ Use email only (password check separate)
    const user = await prisma.user.findUnique({
      where: {
        email: body.email,
      },
    });

    if (!user || user.password !== body.password) {
      return c.json({ error: "Invalid credentials" }, 401);
    }

    const jwt = await sign({ id: user.id }, c.env.JWT_SECRET);
    return c.json({
      jwt,
      user: {
        id: user.id,
        email: user.email,
        name: user.name,
      },
    });
  } catch (err) {
    console.error("Signin error:", err);
    return c.json({ error: "Internal server error" }, 500);
  }
});

userRouter.post("/signup", async (c) => {
  const adapter = new PrismaPg({ connectionString: c.env.DATABASE_URL });

  const prisma = new PrismaClient({ adapter }).$extends(withAccelerate());

  const body = await c.req.json();
  const { success, data } = signupInput.safeParse(body);

  if (!success) {
    return c.json({ message: "Invalid inputs" }, 400);
  }

  try {
    const user = await prisma.user.create({
      data: {
        id: crypto.randomUUID(),
        email: data.email,
        name: data.name,
        password: data.password, // TODO: Add bcrypt hashing in production
      },
    });

    const jwt = await sign({ id: user.id }, c.env.JWT_SECRET);
    return c.json({
      jwt,
      user: {
        id: user.id,
        email: user.email,
        name: user.name,
      },
    });
  } catch (err: any) {
    if (err.code === "P2002") {
      return c.json({ error: "Email already exists" }, 409);
    }
    console.error("Signup error:", err);
    return c.json({ error: "Internal server error" }, 500);
  }
});
