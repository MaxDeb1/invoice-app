import type { NextApiRequest, NextApiResponse } from 'next'
import { prisma } from "../../../lib/prismadb";

// POST /api/post
export default async function handle(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  const { title, content, authorEmail } = req.body
  const result = await prisma.post.create({
    data: {
      title: title,
      content: content,
      author: { connect: { email: authorEmail } },
    },
  })
  return res.status(201).json(result)
}