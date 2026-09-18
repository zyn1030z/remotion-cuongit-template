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

export const Scene5Impact: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  const badgeScale = spring({
    frame,
    fps,
    config: { damping: 12, stiffness: 100 },
  });

  // Benefit 1
  const b1X = spring({
    frame: frame - 6,
    fps,
    from: -80,
    to: 0,
    config: { damping: 13, stiffness: 100 },
  });

  // Benefit 2
  const b2X = spring({
    frame: frame - 16,
    fps,
    from: -80,
    to: 0,
    config: { damping: 13, stiffness: 100 },
  });

  // Benefit 3
  const b3X = spring({
    frame: frame - 26,
    fps,
    from: -80,
    to: 0,
    config: { damping: 13, stiffness: 100 },
  });

  return (
    <AbsoluteFill className="flex flex-col items-center justify-center px-10 text-white">
      <Audio src={staticFile("audio/SSLExplainer/scene5_impact.mp3")} />

      {/* Top Header Badge */}
      <div
        style={{ transform: `scale(${badgeScale})` }}
        className="flex items-center gap-3 rounded-full border-2 border-emerald-400/50 bg-emerald-500/15 px-8 py-3.5 backdrop-blur-md"
      >
        <span className="text-3xl font-black tracking-wider text-emerald-300 uppercase">
          🏆 TẠI SAO SSL LÀ BẮT BUỘC
        </span>
      </div>

      {/* 3 Key Benefits */}
      <div className="mt-8 flex w-full max-w-xl flex-col gap-4">
        {/* Benefit 1: Google SEO */}
        <div
          style={{ transform: `translateX(${b1X}px)` }}
          className="flex items-center gap-5 rounded-3xl border-2 border-emerald-500/40 bg-emerald-950/40 p-5 shadow-xl backdrop-blur-md"
        >
          <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-emerald-500/20 text-4xl">
            📈
          </div>
          <div>
            <h3 className="text-3xl font-black text-emerald-300">Google Ưu tiên SEO</h3>
            <p className="text-xl font-medium text-slate-300 mt-1">Website HTTPS được xếp hạng cao hơn</p>
          </div>
        </div>

        {/* Benefit 2: User Trust */}
        <div
          style={{ transform: `translateX(${b2X}px)` }}
          className="flex items-center gap-5 rounded-3xl border-2 border-sky-500/40 bg-sky-950/40 p-5 shadow-xl backdrop-blur-md"
        >
          <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-sky-500/20 text-4xl">
            🛡️
          </div>
          <div>
            <h3 className="text-3xl font-black text-sky-300">Tin tưởng gấp 3 lần</h3>
            <p className="text-xl font-medium text-slate-300 mt-1">Ổ khóa xanh tạo niềm tin cho người dùng</p>
          </div>
        </div>

        {/* Benefit 3: Data Protection */}
        <div
          style={{ transform: `translateX(${b3X}px)` }}
          className="flex items-center gap-5 rounded-3xl border-2 border-purple-500/40 bg-purple-950/40 p-5 shadow-xl backdrop-blur-md"
        >
          <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-purple-500/20 text-4xl">
            🔐
          </div>
          <div>
            <h3 className="text-3xl font-black text-purple-300">Bảo vệ dữ liệu 100%</h3>
            <p className="text-xl font-medium text-slate-300 mt-1">Mã hóa AES-256 không thể bẻ khóa</p>
          </div>
        </div>
      </div>

      {/* Subtitle */}
      <SubtitleBox
        text="Google ưu tiên xếp hạng website có SSL, và người dùng tin tưởng trang có ổ khóa xanh hơn gấp 3 lần so với trang không có."
        durationInFrames={227}
        highlightKeyword="3 lần"
        className="mt-64"
      />
    </AbsoluteFill>
  );
};
