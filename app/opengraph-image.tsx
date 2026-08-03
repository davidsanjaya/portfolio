import { ImageResponse } from "next/og";

export const size = {
  width: 1200,
  height: 630,
};

export const contentType = "image/png";

export default function Image() {
  return new ImageResponse(
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        width: "100%",
        height: "100%",
        padding: "80px",
        background: "#ffffff",
        color: "#111827",
        fontFamily: "Inter",
      }}
    >
      <div
        style={{
          fontSize: 82,
          fontWeight: 800,
        }}
      >
        David Sanjaya
      </div>

      <div
        style={{
          marginTop: 20,
          fontSize: 42,
          color: "#2563eb",
          fontWeight: 700,
        }}
      >
        Senior Frontend Software Engineer
      </div>

      <div
        style={{
          marginTop: 36,
          fontSize: 28,
          color: "#6b7280",
          maxWidth: 900,
          lineHeight: 1.5,
        }}
      >
        Building scalable enterprise applications with Blazor, React, Next.js,
        and TypeScript.
      </div>

      <div
        style={{
          marginTop: 50,
          fontSize: 24,
          color: "#2563eb",
        }}
      >
        Blazor • React • Next.js • TypeScript
      </div>
    </div>,
    size,
  );
}
