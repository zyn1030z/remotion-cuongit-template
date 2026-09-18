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

export const Scene4Handshake: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  const badgeScale = spring({
    frame,
    fps,
    config: { damping: 12, stiffness: 100 },
  });

  // Step 1: Client Hello
  const step1Scale = spring({
    frame: frame - 6,
    fps,
    config: { damping: 12, stiffness: 100 },
  });

  // Arrow 1
  const arrow1Scale = spring({
    frame: frame - 18,
    fps,
    config: { damping: 10, stiffness: 120 },
  });

  // Step 2: Certificate
  const step2Scale = spring({
    frame: frame - 26,
    fps,
    config: { damping: 12, stiffness: 100 },
  });

  // Arrow 2
  const arrow2Scale = spring({
    frame: frame - 38,
    fps,
    config: { damping: 10, stiffness: 120 },
  });

  // Step 3: Session Key
  const step3Scale = spring({
    frame: frame - 46,
    fps,
    config: { damping: 12, stiffness: 100 },
  });

  return (
    <AbsoluteFill className="flex flex-col items-center justify-center px-10 text-white">
      <Audio src={staticFile("audio/SSLExplainer/scene4_concept2.mp3")} />

      {/* Top Header Badge */}
      <div
        style={{ transform: `scale(${badgeScale})` }}
        className="flex items-center gap-3 rounded-full border-2 border-teal-400/50 bg-teal-500/15 px-8 py-3.5 backdrop-blur-md"
      >
        <span className="text-3xl font-black tracking-wider text-teal-300 uppercase">
          🤝 QUY TRÌNH BẮT TAY SSL
        </span>
      </div>

      {/* Center Flow Diagram (Vertical 3-Step) */}
      <div className="mt-8 flex w-full max-w-xl flex-col items-center gap-3">
        {/* Step 1: Client Hello */}
        <div
          style={{ transform: `scale(${step1Scale})` }}
          className="flex w-full items-center gap-5 rounded-3xl border-2 border-sky-400/35 bg-slate-900/90 p-5 shadow-lg backdrop-blur-md"
        >
          <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-sky-500/20 text-4xl">
            🌐
          </div>
          <div>
            <div className="flex items-center gap-3">
              <h3 className="text-3xl font-black text-sky-300">Client Hello</h3>
              <span className="rounded-full bg-sky-500/30 px-4 py-1 text-base font-black text-sky-200">
                Bước 1: Gửi yêu cầu
              </span>
            </div>
            <p className="text-xl font-medium text-slate-300 mt-1">Trình duyệt khởi tạo kết nối HTTPS</p>
          </div>
        </div>

        {/* Down Arrow 1 */}
        <div
          style={{ transform: `scale(${arrow1Scale})` }}
          className="text-2xl font-bold text-teal-400"
        >
          ⬇️ <span className="text-lg font-mono font-bold text-slate-300">verify certificate</span>
        </div>

        {/* Step 2: Server Certificate */}
        <div
          style={{ transform: `scale(${step2Scale})` }}
          className="flex w-full items-center gap-5 rounded-3xl border-2 border-emerald-400/45 bg-gradient-to-r from-emerald-950/60 to-slate-900/90 p-5 shadow-xl backdrop-blur-md"
        >
          <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-emerald-500/20 text-4xl">
            📜
          </div>
          <div>
            <div className="flex items-center gap-3">
              <h3 className="text-3xl font-black text-emerald-300">Chứng chỉ số</h3>
              <span className="rounded-full bg-emerald-500/30 px-4 py-1 text-base font-black text-emerald-200">
                Bước 2: Xác thực
              </span>
            </div>
            <p className="text-xl font-medium text-slate-300 mt-1">Máy chủ gửi chứng chỉ CA xác minh danh tính</p>
          </div>
        </div>

        {/* Down Arrow 2 */}
        <div
          style={{ transform: `scale(${arrow2Scale})` }}
          className="text-2xl font-bold text-amber-400"
        >
          ⬇️ <span className="text-lg font-mono font-bold text-slate-300">generate session key</span>
        </div>

        {/* Step 3: Session Key */}
        <div
          style={{ transform: `scale(${step3Scale})` }}
          className="flex w-full items-center gap-5 rounded-3xl border-2 border-amber-400/45 bg-gradient-to-r from-amber-950/60 to-slate-900/90 p-5 shadow-xl backdrop-blur-md"
        >
          <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-amber-500/20 text-4xl">
            🔑
          </div>
          <div>
            <div className="flex items-center gap-3">
              <h3 className="text-3xl font-black text-amber-300">Khóa phiên</h3>
              <span className="rounded-full bg-amber-500/30 px-4 py-1 text-base font-black text-amber-200">
                Bước 3: Mã hóa
              </span>
            </div>
            <p className="text-xl font-medium text-slate-300 mt-1">Hai bên tạo khóa chung mã hóa toàn phiên</p>
          </div>
        </div>
      </div>

      {/* Subtitle */}
      <SubtitleBox
        text="Quá trình bắt tay SSL gồm 3 bước: trình duyệt gửi yêu cầu, máy chủ trả về chứng chỉ số, rồi hai bên tạo khóa phiên để mã hóa."
        durationInFrames={249}
        highlightKeyword="bắt tay"
        className="mt-64"
      />
    </AbsoluteFill>
  );
};
