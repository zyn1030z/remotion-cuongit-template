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

export const Scene2Problem: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  // Badge spring
  const badgeScale = spring({
    frame,
    fps,
    config: { damping: 12, stiffness: 100 },
  });

  // Danger card spring
  const cardScale = spring({
    frame: frame - 5,
    fps,
    config: { damping: 12, stiffness: 90 },
  });

  // Data flow items
  const item1Y = spring({
    frame: frame - 15,
    fps,
    from: 60,
    to: 0,
    config: { damping: 14, stiffness: 100 },
  });
  const item2Y = spring({
    frame: frame - 22,
    fps,
    from: 60,
    to: 0,
    config: { damping: 14, stiffness: 100 },
  });
  const item3Y = spring({
    frame: frame - 29,
    fps,
    from: 60,
    to: 0,
    config: { damping: 14, stiffness: 100 },
  });

  const warningPulse = interpolate(
    Math.sin(frame / 6),
    [-1, 1],
    [0.95, 1.05]
  );

  return (
    <AbsoluteFill className="flex flex-col items-center justify-center px-10 text-white">
      <Audio src={staticFile("audio/SSLExplainer/scene2_problem.mp3")} />

      {/* Top Header Badge */}
      <div
        style={{ transform: `scale(${badgeScale})` }}
        className="flex items-center gap-3 rounded-full border-2 border-red-500/50 bg-red-500/15 px-8 py-3.5 backdrop-blur-md"
      >
        <span className="text-3xl font-black tracking-wider text-red-400 uppercase">
          ⚠️ NGUY HIỂM: DỮ LIỆU BỊ LỘ
        </span>
      </div>

      {/* Center Content */}
      <div className="mt-8 flex w-full flex-col items-center gap-6">
        {/* Main Danger Card */}
        <div
          style={{ transform: `scale(${cardScale})` }}
          className="w-full max-w-xl rounded-3xl border-2 border-red-500/40 bg-gradient-to-r from-red-500/15 via-slate-900/95 to-red-500/15 p-8 text-center shadow-2xl backdrop-blur-xl"
        >
          <div className="text-6xl">🕵️</div>
          <h2 className="mt-4 text-4xl font-black text-red-300 leading-tight">
            Không có SSL = Dữ liệu trần
          </h2>
          <p className="mt-3 text-2xl font-semibold text-slate-300">
            Hacker đọc được mọi thứ bạn gửi đi
          </p>
        </div>

        {/* Exposed Data Items */}
        <div className="flex w-full max-w-xl flex-col gap-4">
          <div
            style={{
              transform: `translateY(${item1Y}px) scale(${warningPulse})`,
            }}
            className="flex items-center justify-between rounded-2xl border-2 border-rose-400/35 bg-rose-950/45 px-6 py-4"
          >
            <div className="flex items-center gap-3">
              <span className="text-3xl">🔑</span>
              <span className="text-3xl font-black text-rose-300">Mật khẩu đăng nhập</span>
            </div>
            <span className="rounded-xl bg-rose-500/25 px-4 py-1.5 text-xl font-black text-rose-300">
              Plaintext!
            </span>
          </div>

          <div
            style={{ transform: `translateY(${item2Y}px)` }}
            className="flex items-center justify-between rounded-2xl border-2 border-amber-400/35 bg-amber-950/45 px-6 py-4"
          >
            <div className="flex items-center gap-3">
              <span className="text-3xl">💳</span>
              <span className="text-3xl font-black text-amber-300">Số thẻ ngân hàng</span>
            </div>
            <span className="rounded-xl bg-amber-500/25 px-4 py-1.5 text-xl font-black text-amber-300">
              Plaintext!
            </span>
          </div>

          <div
            style={{ transform: `translateY(${item3Y}px)` }}
            className="flex items-center justify-between rounded-2xl border-2 border-orange-400/35 bg-orange-950/45 px-6 py-4"
          >
            <div className="flex items-center gap-3">
              <span className="text-3xl">📧</span>
              <span className="text-3xl font-black text-orange-300">Email & Tin nhắn</span>
            </div>
            <span className="rounded-xl bg-orange-500/25 px-4 py-1.5 text-xl font-black text-orange-300">
              Plaintext!
            </span>
          </div>
        </div>
      </div>

      {/* Subtitle */}
      <SubtitleBox
        text="Nếu không có SSL, mọi dữ liệu như mật khẩu, số thẻ ngân hàng đều bị gửi dưới dạng văn bản trần, hacker có thể đọc được ngay lập tức."
        durationInFrames={250}
        highlightKeyword="hacker"
        className="mt-64"
      />
    </AbsoluteFill>
  );
};
