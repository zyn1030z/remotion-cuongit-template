import React from "react";
import {
  AbsoluteFill,
  Audio,
  spring,
  staticFile,
  useCurrentFrame,
  useVideoConfig,
} from "remotion";
import { SubtitleBox } from "../components/SubtitleBox";
import { audioManifest } from "../audioData";

export const Scene4Scaling: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  // Badge Spring
  const badgeScale = spring({
    frame,
    fps,
    config: { damping: 12, stiffness: 100 },
  });

  // Scaling animation: Pod 2 and Pod 3 pop up after frame 30
  const pod2Scale = spring({
    frame: frame - 30,
    fps,
    config: { damping: 12, stiffness: 120 },
  });
  const pod3Scale = spring({
    frame: frame - 42,
    fps,
    config: { damping: 12, stiffness: 120 },
  });

  // Tech cards stagger spring
  const techGoX = spring({
    frame: frame - 55,
    fps,
    from: -40,
    to: 0,
    config: { damping: 12, stiffness: 100 },
  });
  const techNodeY = spring({
    frame: frame - 65,
    fps,
    from: 40,
    to: 0,
    config: { damping: 12, stiffness: 100 },
  });
  const techPythonX = spring({
    frame: frame - 75,
    fps,
    from: 40,
    to: 0,
    config: { damping: 12, stiffness: 100 },
  });

  const sceneInfo = audioManifest.scenes[3];

  return (
    <AbsoluteFill className="flex flex-col items-center justify-center px-10 text-white">
      <Audio src={staticFile(sceneInfo.audioPath)} />

      {/* Top Badge */}
      <div
        style={{ transform: `scale(${badgeScale})` }}
        className="flex items-center gap-3 rounded-full border border-emerald-400/40 bg-emerald-500/15 px-8 py-3.5 backdrop-blur-md"
      >
        <span className="text-2xl">📈</span>
        <span className="text-3xl font-black tracking-widest text-emerald-300 uppercase">
          MỞ RỘNG RIÊNG BIỆT & ĐA CÔNG NGHỆ
        </span>
      </div>

      {/* Center Container */}
      <div className="mt-10 flex w-[900px] flex-col items-center gap-6">
        {/* Top: Auto-scaling visualization */}
        <div className="flex w-full flex-col rounded-3xl border-2 border-emerald-500/40 bg-slate-900/85 p-6 shadow-2xl backdrop-blur-xl">
          <div className="flex items-center justify-between border-b border-slate-800 pb-3">
            <span className="text-xl font-bold text-slate-300 flex items-center gap-2">
              <span className="text-amber-400">🔥</span> Tải cao tại Payment Service (Flash Sale)
            </span>
            <span className="rounded-full bg-emerald-500/20 border border-emerald-400/50 px-4 py-1 text-sm font-black text-emerald-300">
              AUTO-SCALE x3 PODS
            </span>
          </div>

          <div className="mt-4 flex items-center justify-around">
            {/* Pod 1: Original */}
            <div className="flex flex-col items-center rounded-2xl border-2 border-emerald-400 bg-emerald-950/40 px-6 py-4 shadow-lg">
              <span className="text-3xl">💳</span>
              <span className="mt-1 text-base font-extrabold text-emerald-200">Pod 1 (Gốc)</span>
              <span className="text-xs text-emerald-400 font-mono mt-0.5">CPU: 85%</span>
            </div>

            {/* Pod 2: Spawned */}
            <div
              style={{ transform: `scale(${pod2Scale})` }}
              className="flex flex-col items-center rounded-2xl border-2 border-emerald-400 bg-emerald-950/40 px-6 py-4 shadow-lg"
            >
              <span className="text-3xl">💳</span>
              <span className="mt-1 text-base font-extrabold text-emerald-200">Pod 2 (+Scale)</span>
              <span className="text-xs text-emerald-400 font-mono mt-0.5">CPU: 45%</span>
            </div>

            {/* Pod 3: Spawned */}
            <div
              style={{ transform: `scale(${pod3Scale})` }}
              className="flex flex-col items-center rounded-2xl border-2 border-emerald-400 bg-emerald-950/40 px-6 py-4 shadow-lg"
            >
              <span className="text-3xl">💳</span>
              <span className="mt-1 text-base font-extrabold text-emerald-200">Pod 3 (+Scale)</span>
              <span className="text-xs text-emerald-400 font-mono mt-0.5">CPU: 40%</span>
            </div>
          </div>
        </div>

        {/* Bottom: Polyglot Technology Freedom */}
        <div className="grid w-full grid-cols-3 gap-4">
          {/* Go */}
          <div
            style={{ transform: `translateX(${techGoX}px)` }}
            className="flex flex-col items-center rounded-2xl border border-cyan-500/40 bg-slate-900/80 p-5 shadow-lg"
          >
            <span className="text-4xl">🐹</span>
            <span className="mt-2 text-2xl font-black text-cyan-300">Golang</span>
            <span className="mt-1 text-xs text-slate-400 text-center">
              Payment & Engine tốc độ cao
            </span>
          </div>

          {/* Node.js */}
          <div
            style={{ transform: `translateY(${techNodeY}px)` }}
            className="flex flex-col items-center rounded-2xl border border-green-500/40 bg-slate-900/80 p-5 shadow-lg"
          >
            <span className="text-4xl">🟢</span>
            <span className="mt-2 text-2xl font-black text-green-300">Node.js</span>
            <span className="mt-1 text-xs text-slate-400 text-center">
              API Gateway & Real-time I/O
            </span>
          </div>

          {/* Python */}
          <div
            style={{ transform: `translateX(${techPythonX}px)` }}
            className="flex flex-col items-center rounded-2xl border border-amber-500/40 bg-slate-900/80 p-5 shadow-lg"
          >
            <span className="text-4xl">🐍</span>
            <span className="mt-2 text-2xl font-black text-amber-300">Python</span>
            <span className="mt-1 text-xs text-slate-400 text-center">
              AI Gợi ý & Data Analytics
            </span>
          </div>
        </div>
      </div>

      {/* Subtitle Box */}
      <SubtitleBox
        text={sceneInfo.text}
        durationInFrames={sceneInfo.durationInFrames}
        highlightKeyword="scale"
        className="mt-60"
      />
    </AbsoluteFill>
  );
};
