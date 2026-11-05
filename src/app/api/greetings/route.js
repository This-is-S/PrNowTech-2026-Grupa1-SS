'use client';
export async function GET() {
  return Response.json([{ id: 1, message: 'Cześć!' }]);
}

export async function POST(request) {
  const body = await request.json();

  if (!body.message) {
    return Response.json({ error: 'Pole message jest wymagane' }, { status: 400 });
  }

  return Response.json({ id: Date.now(), message: body.message }, { status: 201 });
}

export default function QuickMessageForm() {
  async function handleSubmit(e) {
    e.preventDefault();
    const formData = new FormData(e.target);

    await fetch('/api/greetings', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ message: formData.get('message') }),
    });
  }

  return (
    <form onSubmit={handleSubmit}>
      <input name="message" placeholder="Twoja wiadomość" required />
      <button type="submit">Wyślij</button>
    </form>
  );
}