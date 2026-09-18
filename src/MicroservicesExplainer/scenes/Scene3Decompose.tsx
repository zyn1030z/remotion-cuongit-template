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

export const Scene3Decompose: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  // Badge Spring
  const badgeScale = spring({
    frame,
    fps,
    config: { damping: 12, stiffness: 100 },
  });

  // Gateway Spring
  const gatewayScale = spring({
    frame: frame - 6,
    fps,
    config: { damping: 14, stiffness: 100 },
  });

  // Services Spring (staggered)
  const service1Y = spring({
    frame: frame - 14,
    fps,
    from: 50,
    to: 0,
    config: { damping: 12, stiffness: 110 },
  });
  const service2Y = spring({
    frame: frame - 20,
    fps,
    from: 50,
    to: 0,
    config: { damping: 12, stiffness: 110 },
  });
  const service3Y = spring({
    frame: frame - 26,
    fps,
    from: 50,
    to: 0,
    config: { damping: 12, stiffness: 110 },
  });

  // Pulsing connection lines
  const pulse = interpolate(Math.sin(frame / 6), [-1, 1], [0.5, 1]);

  const sceneInfo = audioManifest.scenes[2];

  return (
    <AbsoluteFill className="flex flex-col items-center justify-center px-10 text-white">
      <Audio src={staticFile(sceneInfo.audioPath)} />

      {/* Top Badge */}
      <div
        style={{ transform: `scale(${badgeScale})` }}
        className="flex items-center gap-3 rounded-full border border-indigo-400/40 bg-indigo-500/15 px-8 py-3.5 backdrop-blur-md"
      >
        <span className="text-2xl">🧩</span>
        <span className="text-3xl font-black tracking-widest text-indigo-300 uppercase">
          CHIA NHỎ THÀNH CÁC DỊCH VỤ ĐỘC LẬP
        </span>
      </div>

      {/* Architecture Flow Graphic */}
      <div className="mt-10 flex w-[920px] flex-col items-center">
        {/* API Gateway Card */}
        <div
          style={{ transform: `scale(${gatewayScale})` }}
          className="flex w-full items-center justify-between rounded-2xl border-2 border-indigo-500/60 bg-gradient-to-r from-indigo-950/90 via-slate-900/90 to-cyan-950/90 px-8 py-4 shadow-[0_0_40px_rgba(99,102,241,0.35)] backdrop-blur-xl"
        >
          <div className="flex items-center gap-3">
            <span className="text-3xl">🌐</span>
            <div>
              <h3 className="text-2xl font-black text-indigo-200">
                API GATEWAY
              </h3>
              <p className="text-sm text-slate-400">
                Điều phối định tuyến, Auth token & Giới hạn tốc độ
              </p>
            </div>
          </div>
          <div className="flex gap-2">
            <span className="rounded-lg bg-indigo-500/20 border border-indigo-400/40 px-3 py-1 text-xs font-bold text-indigo-300">
              gRPC
            </span>
            <span className="rounded-lg bg-cyan-500/20 border border-cyan-400/40 px-3 py-1 text-xs font-bold text-cyan-300">
              REST / HTTP
            </span>
          </div>
        </div>

        {/* Animated Routing Connectors */}
        <div
          style={{ opacity: pulse }}
          className="my-3 flex w-full justify-around text-center text-indigo-400 font-mono text-2xl font-bold"
        >
          <span>↓ /auth</span>
          <span>↓ /cart</span>
          <span>↓ /payment</span>
        </div>

        {/* 3 Independent Services Cards */}
        <div className="grid w-full grid-cols-3 gap-5">
          {/* Service 1: Auth */}
          <div
            style={{ transform: `translateY(${service1Y}px)` }}
            className="flex flex-col items-center rounded-2xl border-2 border-cyan-500/50 bg-slate-900/85 p-6 shadow-xl backdrop-blur-xl"
          >
            <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-cyan-500/20 text-3xl border border-cyan-400/50">
              🛡️
            </div>
            <h4 className="mt-3 text-2xl font-black text-cyan-300">Auth Service</h4>
            <p className="text-xs text-slate-400 mt-1">Xác thực Token JWT</p>
            <div className="mt-4 flex items-center gap-2 rounded-xl bg-slate-800 px-3 py-1.5 border border-slate-700">
              <span className="text-sm">🗄️</span>
              <span className="text-xs font-bold text-slate-300">Auth DB</span>
            </div>
          </div>

          {/* Service 2: Cart */}
          <div
            style={{ transform: `translateY(${service2Y}px)` }}
            className="flex flex-col items-center rounded-2xl border-2 border-emerald-500/50 bg-slate-900/85 p-6 shadow-xl backdrop-blur-xl"
          >
            <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-emerald-500/20 text-3xl border border-emerald-400/50">
              🛒
            </div>
            <h4 className="mt-3 text-2xl font-black text-emerald-300">Cart Service</h4>
            <p className="text-xs text-slate-400 mt-1">Lưu trữ giỏ hàng</p>
            <div className="mt-4 flex items-center gap-2 rounded-xl bg-slate-800 px-3 py-1.5 border border-slate-700">
              <span className="text-sm">⚡</span>
              <span className="text-xs font-bold text-slate-300">Redis Cache</span>
            </div>
          </div>

          {/* Service 3: Payment */}
          <div
            style={{ transform: `translateY(${service3Y}px)` }}
            className="flex flex-col items-center rounded-2xl border-2 border-amber-500/50 bg-slate-900/85 p-6 shadow-xl backdrop-blur-xl"
          >
            <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-amber-500/20 text-3xl border border-amber-400/50">
              💳
            </div>
            <h4 className="mt-3 text-2xl font-black text-amber-300">Payment Service</h4>
            <p className="text-xs text-slate-400 mt-1">Xử lý thanh toán</p>
            <div className="mt-4 flex items-center gap-2 rounded-xl bg-slate-800 px-3 py-1.5 border border-slate-700">
              <span className="text-sm">🗄️</span>
              <span className="text-xs font-bold text-slate-300">Postgres DB</span>
            </div>
          </div>
        </div>
      </div>

      {/* Subtitle Box */}
      <SubtitleBox
        text={sceneInfo.text}
        durationInFrames={sceneInfo.durationInFrames}
        highlightKeyword="độc lập"
        className="mt-60"
      />
    </AbsoluteFill>
  );
};
