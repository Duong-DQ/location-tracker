export async function POST(req: Request) {
  const TELEGRAM_TOKEN = process.env.TELEGRAM_TOKEN as string;
  const CHAT_ID = process.env.CHAT_ID as string;

  try {
    const { latitude, longitude } = await req.json();

    const message = `📍 User location:\nLat: ${latitude}\nLon: ${longitude}\nGoogle Maps: https://maps.google.com/?q=${latitude},${longitude}`;

    await fetch(`https://api.telegram.org/bot${TELEGRAM_TOKEN}/sendMessage`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ chat_id: CHAT_ID, text: message }),
    });

    return new Response(JSON.stringify({ status: "ok" }), { status: 200 });
  } catch (error) {
    console.error(error);
    return new Response(JSON.stringify({ error: "failed" }), { status: 500 });
  }
}
