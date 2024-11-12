'use client';

export const CreatePost = () => {
  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const form = event.currentTarget;
    const formData = new FormData(form);
    const title = formData.get('title');
    const content = formData.get('content');
    const response = await fetch('http://localhost:3000/api/posts', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        name: 'Leanne Graham',
        title,
        content,
      }),
    });
    if (!response.ok) {
      throw new Error('Failed to create post');
    }
    form.reset();
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-4 items-start">
      <label>
        Title:
        <input className="text-slate-800" type="text" name="title" />
      </label>
      <label>
        Content:
        <textarea className="text-slate-800" name="content" />
      </label>
      <button className="text-red-400" type="submit">
        Submit
      </button>
    </form>
  );
};
