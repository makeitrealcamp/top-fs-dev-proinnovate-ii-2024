import type { NextApiRequest, NextApiResponse } from 'next';
import { prisma } from '../../../../database/database';

// import { posts } from './db';

export async function GET(request: NextApiRequest) {
  console.log('get handler');

  const posts = prisma.post.findMany();

  const otherPosts = await fetch('https://jsonplaceholder.typicode.com/posts');
  
  return new Response(JSON.stringify(posts), {
    status: 200,
    headers: { 'Content-Type': 'application/json' },
  });
}
export async function POST(request: Request) {
  const post = await request.json();
  console.log({
    post,
  });

  const newPost = await prisma.post.create({
    data: {
      name: post.name,
      title: post.title,
      content: post.content,
    },
  });
  return new Response(JSON.stringify(newPost), {
    status: 200,
    headers: { 'Content-Type': 'application/json' },
  });
}
