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
import { audioManifest } from "../audioData";

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

  // Floating Microservices Hub Graphic
  const hubScale = spring({
    frame: frame - 15,
    fps,
    config: { damping: 10, stiffness: 80 },
  });
  const floatOffset = Math.sin(frame / 12) * 15;

  // Pulse animation for network connections
  const pulse = interpolate(Math.sin(frame / 6), [-1, 1], [0.4, 0.9]);

  const sceneInfo = audioManifest.scenes[0];

  return (
    <AbsoluteFill className="flex flex-col items-center justify-center px-10 text-white">
      <Audio src={staticFile(sceneInfo.audioPath)} />

      {/* Top Category Badge */}
      <div
        style={{ transform: `scale(${badgeScale})` }}
        className="flex items-center gap-3 rounded-full border border-indigo-400/40 bg-indigo-500/10 px-8 py-3.5 backdrop-blur-md"
      >
        <span className="h-4 w-4 rounded-full bg-indigo-400 shadow-[0_0_12px_#818cf8]" />
        <span className="text-3xl font-black tracking-widest text-indigo-300 uppercase">
          KIẾN TRÚC HỆ THỐNG EXPLAINER
        </span>
      </div>

      {/* Center Visuals */}
      <div className="mt-10 flex flex-col items-center gap-6">
        {/* Floating Distributed Architecture Graphic */}
        <div
          style={{
            transform: `scale(${hubScale}) translateY(${floatOffset}px)`,
          }}
          className="relative flex h-60 w-80 items-center justify-center rounded-3xl border-2 border-indigo-400/40 bg-gradient-to-br from-indigo-600/25 via-violet-600/15 to-cyan-500/10 p-6 shadow-[0_0_90px_rgba(99,102,241,0.45)] backdrop-blur-xl"
        >
          {/* Central Hub */}
          <div className="flex flex-col items-center justify-center rounded-2xl bg-indigo-600 px-5 py-3 shadow-[0_0_25px_rgba(99,102,241,0.8)]">
            <span className="text-3xl">🌐</span>
            <span className="text-sm font-black tracking-wider uppercase text-white">
              API GATEWAY
            </span>
          </div>

          {/* Orbiting Satellite Services */}
          <div
            style={{ opacity: pulse }}
            className="absolute -top-5 -left-5 flex items-center gap-1.5 rounded-xl border border-cyan-400/60 bg-slate-900/90 px-3 py-1.5 text-xs font-bold text-cyan-300 shadow-lg"
          >
            <span>🔐</span> Auth
          </div>
          <div
            style={{ opacity: pulse }}
            className="absolute -top-5 -right-5 flex items-center gap-1.5 rounded-xl border border-emerald-400/60 bg-slate-900/90 px-3 py-1.5 text-xs font-bold text-emerald-300 shadow-lg"
          >
            <span>🛒</span> Cart
          </div>
          <div
            style={{ opacity: pulse }}
            className="absolute -bottom-5 -left-5 flex items-center gap-1.5 rounded-xl border border-amber-400/60 bg-slate-900/90 px-3 py-1.5 text-xs font-bold text-amber-300 shadow-lg"
          >
            <span>💳</span> Payment
          </div>
          <div
            style={{ opacity: pulse }}
            className="absolute -bottom-5 -right-5 flex items-center gap-1.5 rounded-xl border border-pink-400/60 bg-slate-900/90 px-3 py-1.5 text-xs font-bold text-pink-300 shadow-lg"
          >
            <span>📦</span> Order
          </div>
        </div>

        {/* Main Hook Titles */}
        <div
          style={{
            transform: `translateY(${titleY}px)`,
            opacity: titleOpacity,
          }}
          className="flex flex-col items-center text-center mt-4"
        >
          <h1 className="text-7xl font-black tracking-tight leading-tight">
            <span className="bg-gradient-to-r from-indigo-300 via-white to-cyan-300 bg-clip-text text-transparent drop-shadow-[0_4px_30px_rgba(99,102,241,0.5)]">
              MICROSERVICES
            </span>
            <br />
            <span className="text-6xl text-white font-extrabold mt-1 inline-block">
              LÀ GÌ?
            </span>
          </h1>

          {/* Netflix & Amazon Badge */}
          <div className="mt-5 flex items-center gap-3 rounded-2xl border border-slate-700/80 bg-slate-900/80 px-6 py-2.5 shadow-xl">
            <span className="text-2xl font-black text-red-500">NETFLIX</span>
            <span className="text-slate-500">•</span>
            <span className="text-2xl font-black text-amber-400">AMAZON</span>
            <span className="text-slate-500">•</span>
            <span className="text-2xl font-bold text-indigo-300">UBER</span>
          </div>
        </div>
      </div>

      {/* Subtitle Box */}
      <SubtitleBox
        text={sceneInfo.text}
        durationInFrames={sceneInfo.durationInFrames}
        highlightKeyword="Microservices"
        className="mt-60"
      />
    </AbsoluteFill>
  );
};
