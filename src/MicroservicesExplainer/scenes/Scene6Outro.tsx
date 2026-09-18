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

export const Scene6Outro: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  // Badge Spring
  const badgeScale = spring({
    frame,
    fps,
    config: { damping: 12, stiffness: 100 },
  });

  // Main Card Spring
  const cardScale = spring({
    frame: frame - 10,
    fps,
    config: { damping: 14, stiffness: 90 },
  });

  // Follow Button Spring
  const buttonScale = spring({
    frame: frame - 22,
    fps,
    config: { damping: 10, stiffness: 130 },
  });

  // Glowing ring pulse
  const glow = interpolate(Math.sin(frame / 6), [-1, 1], [0.4, 0.9]);

  const sceneInfo = audioManifest.scenes[5];

  return (
    <AbsoluteFill className="flex flex-col items-center justify-center px-10 text-white">
      <Audio src={staticFile(sceneInfo.audioPath)} />

      {/* Top Badge */}
      <div
        style={{ transform: `scale(${badgeScale})` }}
        className="flex items-center gap-3 rounded-full border border-indigo-400/40 bg-indigo-500/15 px-8 py-3.5 backdrop-blur-md"
      >
        <span className="text-2xl">💡</span>
        <span className="text-3xl font-black tracking-widest text-indigo-300 uppercase">
          LỜI KHUYÊN TỪ KIẾN TRÚC SƯ
        </span>
      </div>

      {/* Main Punchline Card */}
      <div
        style={{ transform: `scale(${cardScale})` }}
        className="mt-10 flex w-[900px] flex-col items-center rounded-3xl border-2 border-indigo-500/50 bg-gradient-to-b from-indigo-950/70 via-slate-900/90 to-slate-950/95 p-8 shadow-[0_20px_60px_rgba(0,0,0,0.8)] backdrop-blur-2xl text-center"
      >
        <h2 className="text-5xl font-black tracking-tight leading-tight">
          <span className="bg-gradient-to-r from-amber-300 via-rose-300 to-indigo-300 bg-clip-text text-transparent">
            KHÔNG PHẢI VIÊN ĐẠN BẠC!
          </span>
        </h2>

        <p className="mt-4 text-2xl font-bold text-slate-300 max-w-[760px] leading-relaxed">
          Đừng vội vã chuyển sang Microservices khi dự án còn nhỏ. Hãy bắt đầu với{" "}
          <span className="text-cyan-300 font-extrabold">Modular Monolith</span>{" "}
          và chỉ tách service khi quy mô thực sự đòi hỏi.
        </p>

        {/* Follow CTA Card */}
        <div
          style={{ transform: `scale(${buttonScale})` }}
          className="relative mt-8 flex items-center gap-5 rounded-full border-2 border-cyan-400/60 bg-gradient-to-r from-indigo-600 via-blue-600 to-cyan-600 px-10 py-4 shadow-[0_0_50px_rgba(56,189,248,0.5)]"
        >
          <div
            style={{ opacity: glow }}
            className="absolute -inset-1.5 -z-10 rounded-full bg-gradient-to-r from-indigo-500 to-cyan-400 blur-xl"
          />
          <span
            style={{
              transform: `translateY(${Math.sin(frame / 4) * 4}px)`,
            }}
            className="text-3xl inline-block"
          >
            ⚡
          </span>
          <div className="flex flex-col text-left">
            <span className="text-2xl font-black tracking-wide text-white uppercase">
              FOLLOW KÊNH NGAY
            </span>
            <span className="text-sm font-semibold text-cyan-100">
              Kiến thức Lập trình & System Design mỗi ngày
            </span>
          </div>
          <span className="text-3xl">👉</span>
        </div>
      </div>

      {/* Subtitle Box */}
      <SubtitleBox
        text={sceneInfo.text}
        durationInFrames={sceneInfo.durationInFrames}
        highlightKeyword="viên đạn bạc"
        className="mt-60"
      />
    </AbsoluteFill>
  );
};
