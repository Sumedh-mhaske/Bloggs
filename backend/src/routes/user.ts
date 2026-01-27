import { Hono } from "hono";
import { PrismaClient } from "../generated/prisma/edge";
import { sign, verify } from "hono/jwt";
import { signinInput, signupInput } from "@sumedh31/bloggs-common";

export const userRouter = new Hono<{
  Bindings: {
    DATABASE_URL: string;
    JWT_SECRET: string;
  };
}>();

userRouter.post("/signin", async (c) => {
  const prisma = new PrismaClient();

  const body = await c.req.json();
  const { success } = signinInput.safeParse(body);

  if (!success) {
    return c.json({ message: "Invalid inputs" }, 400);
  }

  try {
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
  const prisma = new PrismaClient();

  const body = await c.req.json();

  const { success, data } = signupInput.safeParse(body);

  if (!success) {
    return c.json({ message: "Invalid inputs", errors: c.error }, 400);
  }

  try {
    const userData = {
      id: "user_" + Date.now() + "_" + Math.random().toString(36).substr(2, 9),
      email: data.email,
      name: data.name,
      password: data.password,
    };

    const user = await prisma.user.create({
      data: userData,
    });

    const jwt = await sign({ id: user.id }, c.env.JWT_SECRET);

    return c.json({
      jwt,
      user: { id: user.id, email: user.email, name: user.name },
    });
  } catch (err: any) {
    if (err.code === "P2002") {
      return c.json({ error: "Email already exists" }, 409);
    }
    return c.json({ error: "Internal server error" }, 500);
  }
});
