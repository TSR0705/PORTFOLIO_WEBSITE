import { ImageResponse } from "next/og";

// Route segment config
export const runtime = "edge";

// Image metadata
export const alt = "Tanmay Singh | Software Developer";
export const size = {
  width: 1200,
  height: 630,
};

export const contentType = "image/png";

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          background: "#000000",
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",
          justifyContent: "space-between",
          padding: "80px",
          fontFamily: "sans-serif",
          position: "relative",
          overflow: "hidden",
        }}
      >
        {/* Subtle background glow effect */}
        <div
          style={{
            position: "absolute",
            top: "-20%",
            right: "-20%",
            width: "600px",
            height: "600px",
            borderRadius: "50%",
            background: "radial-gradient(circle, rgba(59,130,246,0.18), transparent 70%)",
          }}
        />
        <div
          style={{
            position: "absolute",
            bottom: "-15%",
            left: "40%",
            width: "400px",
            height: "400px",
            borderRadius: "50%",
            background: "radial-gradient(circle, rgba(245,158,11,0.08), transparent 70%)",
          }}
        />

        {/* Top Header Row (Logo & Metadata) */}
        <div
          style={{
            display: "flex",
            width: "100%",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "12px",
            }}
          >
            {/* Elegant SVG Logo representation */}
            <svg
              width="40"
              height="40"
              viewBox="0 0 100 100"
              fill="none"
              style={{ color: "#E1E0CC" }}
            >
              <polygon
                points="50,15 85,35 85,75 50,95 15,75 15,35"
                stroke="currentColor"
                strokeWidth="6"
                strokeLinejoin="round"
              />
              <path
                d="M40,38 L60,38 M50,38 L50,65 M42,65 L58,65"
                stroke="currentColor"
                strokeWidth="6"
                strokeLinecap="round"
              />
            </svg>
            <span
              style={{
                fontSize: "20px",
                fontWeight: "bold",
                letterSpacing: "0.2em",
                color: "#FFFFFF",
                textTransform: "uppercase",
              }}
            >
              Tanmay Singh
            </span>
          </div>
          <span
            style={{
              fontSize: "14px",
              color: "rgba(255,255,255,0.4)",
              letterSpacing: "0.15em",
              textTransform: "uppercase",
            }}
          >
            LOC: CHENNAI, IN
          </span>
        </div>

        {/* Main Branding Message */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "16px",
            marginTop: "auto",
            marginBottom: "auto",
          }}
        >
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "12px",
            }}
          >
            <div
              style={{
                width: "32px",
                height: "2px",
                background: "rgba(245,158,11,0.6)",
              }}
            />
            <span
              style={{
                fontSize: "16px",
                fontWeight: "600",
                color: "#F59E0B",
                letterSpacing: "0.3em",
                textTransform: "uppercase",
              }}
            >
              SOFTWARE DEVELOPER
            </span>
          </div>
          <h1
            style={{
              fontSize: "76px",
              fontWeight: "300",
              color: "#FFFFFF",
              margin: 0,
              lineHeight: 1.05,
              letterSpacing: "-0.02em",
            }}
          >
            Backend &amp; <br />
            <span style={{ fontWeight: "700" }}>Cloud Computing</span>
          </h1>
        </div>

        {/* Footer Details */}
        <div
          style={{
            display: "flex",
            width: "100%",
            justifyContent: "space-between",
            alignItems: "center",
            borderTop: "1px solid rgba(255, 255, 255, 0.08)",
            paddingTop: "24px",
          }}
        >
          <span
            style={{
              fontSize: "16px",
              color: "rgba(255, 255, 255, 0.6)",
              letterSpacing: "0.05em",
            }}
          >
            B.Tech Computer Science @ SRMIST
          </span>
          <span
            style={{
              fontSize: "16px",
              color: "#E1E0CC",
              fontWeight: "600",
            }}
          >
            tanmaysinghrajput.vercel.app
          </span>
        </div>
      </div>
    ),
    {
      ...size,
    }
  );
}
