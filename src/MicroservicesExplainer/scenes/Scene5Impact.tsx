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

export const Scene5Impact: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  // Badge Spring
  const badgeScale = spring({
    frame,
    fps,
    config: { damping: 12, stiffness: 100 },
  });

  // Staggered Cards Spring
  const benefitCardX = spring({
    frame: frame - 10,
    fps,
    from: -60,
    to: 0,
    config: { damping: 14, stiffness: 90 },
  });

  const challengeCardX = spring({
    frame: frame - 20,
    fps,
    from: 60,
    to: 0,
    config: { damping: 14, stiffness: 90 },
  });

  const sceneInfo = audioManifest.scenes[4];

  return (
    <AbsoluteFill className="flex flex-col items-center justify-center px-10 text-white">
      <Audio src={staticFile(sceneInfo.audioPath)} />

      {/* Top Badge */}
      <div
        style={{ transform: `scale(${badgeScale})` }}
        className="flex items-center gap-3 rounded-full border border-sky-400/40 bg-sky-500/15 px-8 py-3.5 backdrop-blur-md"
      >
        <span className="text-2xl">⚖️</span>
        <span className="text-3xl font-black tracking-widest text-sky-300 uppercase">
          GIÁ TRỊ & THÁCH THỨC THỰC CHIẾN
        </span>
      </div>

      {/* Two Comparative Panels */}
      <div className="mt-10 grid w-[920px] grid-cols-2 gap-6">
        {/* Left Panel: Big Advantages */}
        <div
          style={{ transform: `translateX(${benefitCardX}px)` }}
          className="flex flex-col rounded-3xl border-2 border-emerald-500/50 bg-gradient-to-b from-emerald-950/40 via-slate-900/90 to-slate-950/90 p-7 shadow-2xl backdrop-blur-xl"
        >
          <div className="flex items-center gap-3 border-b border-emerald-500/30 pb-4">
            <span className="text-3xl">🚀</span>
            <div>
              <h3 className="text-2xl font-black text-emerald-300">
                ƯU ĐIỂM VƯỢT TRỘI
              </h3>
              <p className="text-xs text-slate-400">Tăng tốc sản phẩm</p>
            </div>
          </div>

          <div className="mt-6 flex flex-col gap-4">
            <div className="flex items-start gap-3 rounded-xl bg-slate-800/60 p-3.5 border border-slate-700">
              <span className="text-2xl">⚡</span>
              <div>
                <h4 className="text-lg font-bold text-emerald-200">Deploy liên tục</h4>
                <p className="text-xs text-slate-400">Release độc lập hàng chục lần/ngày</p>
              </div>
            </div>

            <div className="flex items-start gap-3 rounded-xl bg-slate-800/60 p-3.5 border border-slate-700">
              <span className="text-2xl">🛡️</span>
              <div>
                <h4 className="text-lg font-bold text-emerald-200">Cô lập sự cố</h4>
                <p className="text-xs text-slate-400">1 dịch vụ lỗi không làm chết cả hệ thống</p>
              </div>
            </div>

            <div className="flex items-start gap-3 rounded-xl bg-slate-800/60 p-3.5 border border-slate-700">
              <span className="text-2xl">📈</span>
              <div>
                <h4 className="text-lg font-bold text-emerald-200">Uptime 99.99%</h4>
                <p className="text-xs text-slate-400">High Availability chuẩn Enterprise</p>
              </div>
            </div>
          </div>
        </div>

        {/* Right Panel: Serious Challenges */}
        <div
          style={{ transform: `translateX(${challengeCardX}px)` }}
          className="flex flex-col rounded-3xl border-2 border-amber-500/50 bg-gradient-to-b from-amber-950/40 via-slate-900/90 to-slate-950/90 p-7 shadow-2xl backdrop-blur-xl"
        >
          <div className="flex items-center gap-3 border-b border-amber-500/30 pb-4">
            <span className="text-3xl">⚙️</span>
            <div>
              <h3 className="text-2xl font-black text-amber-300">
                THÁCH THỨC LỚN
              </h3>
              <p className="text-xs text-slate-400">Độ phức tạp phân tán</p>
            </div>
          </div>

          <div className="mt-6 flex flex-col gap-4">
            <div className="flex items-start gap-3 rounded-xl bg-slate-800/60 p-3.5 border border-slate-700">
              <span className="text-2xl">🕸️</span>
              <div>
                <h4 className="text-lg font-bold text-amber-200">Độ trễ mạng (Latency)</h4>
                <p className="text-xs text-slate-400">Giao tiếp phân tán giữa các nodes</p>
              </div>
            </div>

            <div className="flex items-start gap-3 rounded-xl bg-slate-800/60 p-3.5 border border-slate-700">
              <span className="text-2xl">🔄</span>
              <div>
                <h4 className="text-lg font-bold text-amber-200">Đồng bộ dữ liệu</h4>
                <p className="text-xs text-slate-400">Quản lý Distributed Transaction (Saga)</p>
              </div>
            </div>

            <div className="flex items-start gap-3 rounded-xl bg-slate-800/60 p-3.5 border border-slate-700">
              <span className="text-2xl">🛠️</span>
              <div>
                <h4 className="text-lg font-bold text-amber-200">Đòi hỏi DevOps mạnh</h4>
                <p className="text-xs text-slate-400">K8s, Docker, CI/CD, Observability</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Subtitle Box */}
      <SubtitleBox
        text={sceneInfo.text}
        durationInFrames={sceneInfo.durationInFrames}
        highlightKeyword="DevOps"
        className="mt-60"
      />
    </AbsoluteFill>
  );
};
