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

export const Scene6Outro: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  const badgeScale = spring({
    frame,
    fps,
    config: { damping: 12, stiffness: 100 },
  });

  const mainCardScale = spring({
    frame: frame - 8,
    fps,
    config: { damping: 12, stiffness: 90, mass: 0.8 },
  });

  const ctaScale = spring({
    frame: frame - 20,
    fps,
    config: { damping: 10, stiffness: 120 },
  });

  const pulse = interpolate(
    Math.sin(frame / 6),
    [-1, 1],
    [0.96, 1.04]
  );

  return (
    <AbsoluteFill className="flex flex-col items-center justify-center px-10 text-white">
      <Audio src={staticFile("audio/SSLExplainer/scene6_outro.mp3")} />

      {/* Top Badge */}
      <div
        style={{ transform: `scale(${badgeScale})` }}
        className="flex items-center gap-3 rounded-full border-2 border-emerald-400/50 bg-emerald-500/15 px-8 py-3.5 backdrop-blur-md"
      >
        <span className="text-3xl font-black tracking-wider text-emerald-300 uppercase">
          🚀 TỔNG KẾT & HÀNH ĐỘNG
        </span>
      </div>

      {/* Center Main Card */}
      <div
        style={{ transform: `scale(${mainCardScale})` }}
        className="mt-8 flex w-full max-w-xl flex-col items-center rounded-3xl border-2 border-white/20 bg-gradient-to-b from-slate-900/90 via-emerald-950/40 to-slate-950 p-8 text-center shadow-2xl backdrop-blur-xl"
      >
        <div
          style={{ transform: `scale(${pulse})` }}
          className="flex h-24 w-24 items-center justify-center rounded-3xl bg-gradient-to-br from-emerald-400 to-green-600 shadow-[0_0_50px_rgba(52,211,153,0.5)]"
        >
          <span className="text-6xl">🔒</span>
        </div>

        <h2 className="mt-5 text-5xl font-black tracking-tight text-white">
          BẢO VỆ VỚI SSL
        </h2>
        <p className="mt-2 text-2xl font-bold text-emerald-300">
          Lớp bảo mật đầu tiên cho mọi ứng dụng web
        </p>

        {/* CTA Buttons */}
        <div
          style={{ transform: `scale(${ctaScale})` }}
          className="mt-6 flex w-full flex-col gap-3.5"
        >
          <div className="flex items-center justify-center gap-4 rounded-2xl border border-emerald-400/40 bg-emerald-500/20 py-4 font-black text-emerald-200">
            <span className="text-3xl">❤️</span>
            <span className="text-2xl">Thả tim &amp; Lưu lại để xem lại</span>
          </div>

          <div className="flex items-center justify-center gap-4 rounded-2xl border border-purple-400/40 bg-purple-500/20 py-4 font-black text-purple-200">
            <span className="text-3xl">🔔</span>
            <span className="text-2xl">Follow kênh để đón xem video mới!</span>
          </div>
        </div>
      </div>

      {/* Subtitle */}
      <SubtitleBox
        text="SSL là lớp bảo vệ đầu tiên cho mọi ứng dụng web. Follow kênh để cập nhật kiến thức bảo mật mỗi ngày nhé!"
        durationInFrames={226}
        highlightKeyword="follow"
        className="mt-64"
      />
    </AbsoluteFill>
  );
};
