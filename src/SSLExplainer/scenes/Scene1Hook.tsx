import React from "react";
import {
  AbsoluteFill,
  Audio,
  interpolate,
  spring,
  staticFile,
  useCurrentFrame,
  useVideoConfig,
} from "remotion";
import { SubtitleBox } from "../components/SubtitleBox";

export const Scene1Hook: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  // Badge spring
  const badgeScale = spring({
    frame,
    fps,
    config: { damping: 12, stiffness: 100, mass: 0.8 },
  });

  // Title spring
  const titleY = spring({
    frame: frame - 6,
    fps,
    from: 60,
    to: 0,
    config: { damping: 14, stiffness: 90 },
  });
  const titleOpacity = interpolate(frame, [6, 20], [0, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });

  // Floating Lock Icon
  const lockScale = spring({
    frame: frame - 15,
    fps,
    config: { damping: 10, stiffness: 80 },
  });
  const floatOffset = Math.sin(frame / 12) * 15;

  // Shield glow pulse
  const glowOpacity = interpolate(
    Math.sin(frame / 8),
    [-1, 1],
    [0.3, 0.7]
  );

  return (
    <AbsoluteFill className="flex flex-col items-center justify-center px-10 text-white">
      <Audio src={staticFile("audio/SSLExplainer/scene1_hook.mp3")} />

      {/* Top Badge */}
      <div
        style={{
          transform: `scale(${badgeScale})`,
        }}
        className="flex items-center gap-3 rounded-full border border-emerald-400/40 bg-emerald-500/10 px-8 py-3.5 backdrop-blur-md"
      >
        <span className="h-4 w-4 animate-ping rounded-full bg-emerald-400" />
        <span className="text-3xl font-black tracking-widest text-emerald-300 uppercase">
          BẢO MẬT WEB EXPLAINER
        </span>
      </div>

      {/* Center Visuals */}
      <div className="mt-10 flex flex-col items-center gap-6">
        {/* Floating SSL Lock Graphic */}
        <div
          style={{
            transform: `scale(${lockScale}) translateY(${floatOffset}px)`,
          }}
          className="relative flex h-52 w-52 items-center justify-center rounded-3xl border-2 border-emerald-400/40 bg-gradient-to-br from-emerald-500/25 via-green-600/15 to-transparent p-6 shadow-[0_0_90px_rgba(52,211,153,0.45)] backdrop-blur-xl"
        >
          {/* Glow behind */}
          <div
            style={{ opacity: glowOpacity }}
            className="absolute -inset-2 -z-10 rounded-3xl bg-gradient-to-r from-emerald-400/30 to-green-500/30 blur-2xl"
          />
          {/* SVG Lock/Shield Icon */}
          <svg viewBox="0 0 100 100" className="h-36 w-36 drop-shadow-lg" fill="none">
            {/* Shield shape */}
            <path
              d="M50 8L15 25V50C15 72 30 88 50 95C70 88 85 72 85 50V25L50 8Z"
              fill="#059669"
              fillOpacity="0.3"
              stroke="#34D399"
              strokeWidth="3"
            />
            {/* Lock body */}
            <rect x="35" y="48" width="30" height="24" rx="4" fill="#34D399" />
            {/* Lock shackle */}
            <path
              d="M40 48V38C40 32 44 28 50 28C56 28 60 32 60 38V48"
              stroke="#34D399"
              strokeWidth="4"
              strokeLinecap="round"
              fill="none"
            />
            {/* Keyhole */}
            <circle cx="50" cy="58" r="4" fill="#064E3B" />
            <rect x="48" y="58" width="4" height="8" rx="1" fill="#064E3B" />
          </svg>
        </div>

        {/* Main Hook Titles */}
        <div
          style={{
            transform: `translateY(${titleY}px)`,
            opacity: titleOpacity,
          }}
          className="text-center"
        >
          <h1 className="text-8xl font-black tracking-tight leading-tight">
            <span className="bg-gradient-to-r from-emerald-400 via-green-300 to-teal-400 bg-clip-text text-transparent">
              SSL
            </span>{" "}
            LÀ GÌ?
          </h1>
          <p className="mt-4 text-4xl font-bold text-slate-200">
            Tại sao website nào cũng cần ổ khóa xanh?
          </p>
        </div>
      </div>

      {/* Subtitle */}
      <SubtitleBox
        text="Bạn có biết SSL là gì và tại sao mỗi website đều bắt buộc phải có ổ khóa xanh trên thanh địa chỉ không?"
        durationInFrames={193}
        highlightKeyword="SSL"
        className="mt-64"
      />
    </AbsoluteFill>
  );
};
