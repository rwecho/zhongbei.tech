import { ImageResponse } from "next/og";

import { site } from "@/config/site";

export const alt = `${site.shortName} - 让大模型真正跑在你的业务里`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "72px",
          background:
            "linear-gradient(135deg, #12122a 0%, #1b1b3a 55%, #2a2465 100%)",
          color: "#f5f5fa",
          fontFamily: "sans-serif",
        }}
      >
        {/* 顶部：北极星标识 */}
        <div style={{ display: "flex", alignItems: "center", gap: 20 }}>
          <svg width="56" height="56" viewBox="0 0 32 32">
            <path
              d="M16 1.5 L18.9 13.1 L30.5 16 L18.9 18.9 L16 30.5 L13.1 18.9 L1.5 16 L13.1 13.1 Z"
              fill="#8b8bf5"
            />
          </svg>
          <div style={{ display: "flex", flexDirection: "column" }}>
            <span style={{ fontSize: 30, fontWeight: 700 }}>终北科技</span>
            <span style={{ fontSize: 14, letterSpacing: 6, color: "#9a9ac0" }}>
              ZHONGBEI TECH
            </span>
          </div>
        </div>

        {/* 中部：主标题 */}
        <div style={{ display: "flex", flexDirection: "column", gap: 18 }}>
          <div
            style={{
              fontSize: 64,
              fontWeight: 700,
              lineHeight: 1.25,
              display: "flex",
            }}
          >
            让大模型，真正跑在你的业务里
          </div>
          <div style={{ fontSize: 28, color: "#a8a8cf", display: "flex" }}>
            大模型应用开发 · AI Agent 定制 · RAG 知识库
          </div>
        </div>

        {/* 底部：域名 */}
        <div style={{ fontSize: 22, color: "#8f8fb8", display: "flex" }}>
          zhongbei.tech
        </div>
      </div>
    ),
    size
  );
}
