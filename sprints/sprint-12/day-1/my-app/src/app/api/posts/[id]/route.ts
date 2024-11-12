import { posts } from '../db';

type context = {
  params: Promise<{ id: number }>;
};

export async function DELETE(request: Request, context: context) {
  //   const id = Number(context.params.id);
  const { id } = await context.params;
  const postIndex = posts.findIndex((post) => post.id === id);
  if (postIndex === -1) {
    return new Response('Post not found', {
      status: 404,
    });
  }
  console.log(posts.filter((post) => post.id !== id));
  return new Response(JSON.stringify(posts.filter((post) => post.id !== id)), {
    status: 200,
    headers: { 'Content-Type': 'application/json' },
  });
}


export async function PUT(request: Request) {
    const post = await request.json();
    const postIndex = posts.findIndex((p) => p.id === post.id);
    if (postIndex === -1) {
        return new Response('Post not found', {
        status: 404,
        });
    }
    posts[postIndex] = post;
    return new Response(JSON.stringify(posts), {
        status: 200,
        headers: { 'Content-Type': 'application/json' },
    });
}