export async function POST(req: Request) {
  // This route is no longer used, as we're using mock responses
  return new Response(JSON.stringify({ error: 'This route is no longer in use' }), {
    status: 200,
    headers: { 'Content-Type': 'application/json' },
  });
}

