import express from "express";
import { prisma } from "@repo/db/client";

const app = express();

app.use(express.json());

app.get("/", (_, res) => {
  res.send("hello world!");
});

app.post("/signup", async (req, res) => {
  const { username, password } = req.body;
  const user = await prisma.user.create({
    data: { username, password },
  });
  res.status(200).json(user)
});

app.listen(8000);
