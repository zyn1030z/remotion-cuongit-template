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

export const Scene3Encryption: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  // Top badge
  const badgeScale = spring({
    frame,
    fps,
    config: { damping: 12, stiffness: 100 },
  });

  // Main tunnel box
  const boxScale = spring({
    frame: frame - 6,
    fps,
    config: { damping: 12, stiffness: 85, mass: 0.9 },
  });

  // Browser side
  const browserX = spring({
    frame: frame - 14,
    fps,
    from: -80,
    to: 0,
    config: { damping: 14, stiffness: 110 },
  });

  // Server side
  const serverX = spring({
    frame: frame - 20,
    fps,
    from: 80,
    to: 0,
    config: { damping: 14, stiffness: 110 },
  });

  // Encrypted data flow
  const dataOpacity = interpolate(frame, [30, 40], [0, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });
  const dataX = interpolate(frame, [30, 90], [0, 100], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });

  const glowOpacity = interpolate(
    Math.sin(frame / 8),
    [-1, 1],
    [0.4, 0.8]
  );

  return (
    <AbsoluteFill className="flex flex-col items-center justify-center px-10 text-white">
      <Audio src={staticFile("audio/SSLExplainer/scene3_concept1.mp3")} />

      {/* Top Header Badge */}
      <div
        style={{ transform: `scale(${badgeScale})` }}
        className="flex items-center gap-3 rounded-full border-2 border-emerald-400/50 bg-emerald-500/15 px-8 py-3.5 backdrop-blur-md"
      >
        <span className="text-3xl font-black tracking-wider text-emerald-300 uppercase">
          🔐 GIẢI PHÁP: ĐƯỜNG HẦM MÃ HÓA
        </span>
      </div>

      {/* Center Visual: Encryption Tunnel */}
      <div
        style={{ transform: `scale(${boxScale})` }}
        className="relative mt-8 flex w-full max-w-xl flex-col items-center rounded-3xl border-2 border-emerald-400/50 bg-gradient-to-b from-emerald-950/80 via-slate-900/90 to-slate-950 p-8 shadow-2xl backdrop-blur-2xl"
      >
        {/* Glow behind */}
        <div
          style={{ opacity: glowOpacity }}
          className="absolute -inset-1 -z-10 rounded-3xl bg-gradient-to-r from-emerald-500/30 to-green-600/30 blur-2xl"
        />

        {/* Tunnel Header */}
        <div className="flex items-center gap-4">
          <span className="text-5xl">🔒</span>
          <div>
            <h2 className="text-4xl font-black tracking-tight text-white">
              SSL / TLS TUNNEL
            </h2>
            <p className="text-2xl font-bold text-emerald-300">Mã hóa End-to-End</p>
          </div>
        </div>

        {/* Browser ↔ Server Visual */}
        <div className="mt-6 flex w-full items-center justify-between gap-4">
          {/* Browser */}
          <div
            style={{ transform: `translateX(${browserX}px)` }}
            className="flex flex-col items-center rounded-2xl border-2 border-sky-400/35 bg-sky-950/50 px-5 py-4"
          >
            <span className="text-4xl">🌐</span>
            <span className="mt-2 text-xl font-black text-sky-300">Trình duyệt</span>
          </div>

          {/* Encrypted Tunnel Line */}
          <div className="relative flex-1 mx-2">
            <div className="h-1 w-full rounded-full bg-gradient-to-r from-emerald-400/60 via-green-300/80 to-emerald-400/60" />
            {/* Moving encrypted data */}
            <div
              style={{
                opacity: dataOpacity,
                left: `${dataX}%`,
                transform: "translateX(-50%)",
              }}
              className="absolute -top-4 text-2xl font-mono font-black text-emerald-300"
            >
              🔐 ****
            </div>
          </div>

          {/* Server */}
          <div
            style={{ transform: `translateX(${serverX}px)` }}
            className="flex flex-col items-center rounded-2xl border-2 border-purple-400/35 bg-purple-950/50 px-5 py-4"
          >
            <span className="text-4xl">🖥️</span>
            <span className="mt-2 text-xl font-black text-purple-300">Máy chủ</span>
          </div>
        </div>

        {/* Before vs After */}
        <div className="mt-6 grid w-full grid-cols-2 gap-4">
          <div className="flex flex-col items-center rounded-2xl border border-red-500/30 bg-red-950/30 p-4">
            <span className="text-xl font-black text-red-400">❌ Không SSL</span>
            <span className="mt-2 font-mono text-lg text-red-300">"password123"</span>
          </div>
          <div className="flex flex-col items-center rounded-2xl border border-emerald-500/30 bg-emerald-950/30 p-4">
            <span className="text-xl font-black text-emerald-400">✅ Có SSL</span>
            <span className="mt-2 font-mono text-lg text-emerald-300">"x7&amp;kQ#9p..."</span>
          </div>
        </div>
      </div>

      {/* Subtitle */}
      <SubtitleBox
        text="SSL tạo ra một đường hầm mã hóa giữa trình duyệt và máy chủ, biến toàn bộ dữ liệu thành chuỗi ký tự không thể giải mã được."
        durationInFrames={223}
        highlightKeyword="mã hóa"
        className="mt-64"
      />
    </AbsoluteFill>
  );
};
