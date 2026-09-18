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

export const Scene2Problem: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  // Badge Spring
  const badgeScale = spring({
    frame,
    fps,
    config: { damping: 12, stiffness: 100 },
  });

  // Monolith Container Spring
  const containerScale = spring({
    frame: frame - 5,
    fps,
    config: { damping: 14, stiffness: 90 },
  });

  // Crash event triggers after frame 60
  const isCrashing = frame > 60;
  const shakeOffset = isCrashing ? Math.sin(frame * 2.5) * 6 : 0;

  // Flash red on crash
  const redAlertOpacity = interpolate(
    Math.sin(frame / 4),
    [-1, 1],
    [0.4, 0.95]
  );

  const sceneInfo = audioManifest.scenes[1];

  return (
    <AbsoluteFill className="flex flex-col items-center justify-center px-10 text-white">
      <Audio src={staticFile(sceneInfo.audioPath)} />

      {/* Top Warning Badge */}
      <div
        style={{ transform: `scale(${badgeScale})` }}
        className="flex items-center gap-3 rounded-full border border-rose-500/40 bg-rose-500/15 px-8 py-3.5 backdrop-blur-md"
      >
        <span className="text-2xl">⚠️</span>
        <span className="text-3xl font-black tracking-widest text-rose-300 uppercase">
          VẤN ĐỀ VỚI HỆ THỐNG MONOLITH
        </span>
      </div>

      {/* Monolith Block Graphic */}
      <div
        style={{
          transform: `scale(${containerScale}) translateX(${shakeOffset}px)`,
        }}
        className="relative mt-12 flex w-[880px] flex-col items-center rounded-3xl border-2 border-slate-700 bg-gradient-to-b from-slate-900/90 to-slate-950/95 p-8 shadow-[0_20px_50px_rgba(0,0,0,0.8)] backdrop-blur-2xl"
      >
        {/* Monolith Header */}
        <div className="flex w-full items-center justify-between border-b border-slate-800 pb-4">
          <div className="flex items-center gap-3">
            <span className="text-3xl">🏢</span>
            <div>
              <h2 className="text-3xl font-black text-slate-100">
                1 Monolithic Application
              </h2>
              <p className="text-lg text-slate-400">
                Chung 1 Codebase • Chung 1 Database • Chung 1 Server
              </p>
            </div>
          </div>
          <span className="rounded-xl bg-slate-800 px-4 py-1.5 text-base font-bold text-slate-300">
            10GB Binary
          </span>
        </div>

        {/* Modules crammed together */}
        <div className="mt-6 grid w-full grid-cols-3 gap-4">
          <div className="flex flex-col items-center justify-center rounded-2xl border border-slate-700 bg-slate-800/60 p-5">
            <span className="text-3xl mb-1">🔐</span>
            <span className="text-xl font-extrabold text-slate-200">Auth Module</span>
          </div>
          <div className="flex flex-col items-center justify-center rounded-2xl border border-slate-700 bg-slate-800/60 p-5">
            <span className="text-3xl mb-1">🛒</span>
            <span className="text-xl font-extrabold text-slate-200">Cart Module</span>
          </div>
          <div className="flex flex-col items-center justify-center rounded-2xl border border-slate-700 bg-slate-800/60 p-5">
            <span className="text-3xl mb-1">💳</span>
            <span className="text-xl font-extrabold text-slate-200">Payment Module</span>
          </div>
          <div className="flex flex-col items-center justify-center rounded-2xl border border-slate-700 bg-slate-800/60 p-5">
            <span className="text-3xl mb-1">📦</span>
            <span className="text-xl font-extrabold text-slate-200">Order Module</span>
          </div>
          <div className="flex flex-col items-center justify-center rounded-2xl border border-slate-700 bg-slate-800/60 p-5">
            <span className="text-3xl mb-1">🔔</span>
            <span className="text-xl font-extrabold text-slate-200">Notification</span>
          </div>

          {/* Crashing Module */}
          <div
            style={{
              borderColor: isCrashing ? "#ef4444" : "#475569",
              backgroundColor: isCrashing ? "rgba(239,68,68,0.25)" : "rgba(30,41,59,0.6)",
            }}
            className="flex flex-col items-center justify-center rounded-2xl border p-5"
          >
            <span className="text-3xl mb-1">{isCrashing ? "💥" : "📊"}</span>
            <span
              style={{
                opacity: isCrashing ? redAlertOpacity : 1,
              }}
              className={`text-xl font-extrabold ${isCrashing ? "text-rose-400" : "text-slate-200"}`}
            >
              {isCrashing ? "CRASH!" : "Report Module"}
            </span>
          </div>
        </div>

        {/* Crash Notification Banner */}
        {isCrashing && (
          <div
            style={{ opacity: redAlertOpacity }}
            className="mt-6 flex w-full items-center justify-center gap-4 rounded-2xl border-2 border-rose-500 bg-rose-600/30 px-6 py-4 shadow-[0_0_40px_rgba(244,63,94,0.6)]"
          >
            <span className="text-3xl">🚨</span>
            <span className="text-2xl font-black text-rose-200 uppercase tracking-wide">
              Lỗi Bộ Nhớ Report Module ➔ Sập Luôn Thanh Toán!
            </span>
          </div>
        )}
      </div>

      {/* Subtitle Box */}
      <SubtitleBox
        text={sceneInfo.text}
        durationInFrames={sceneInfo.durationInFrames}
        highlightKeyword="Monolith"
        className="mt-60"
      />
    </AbsoluteFill>
  );
};
