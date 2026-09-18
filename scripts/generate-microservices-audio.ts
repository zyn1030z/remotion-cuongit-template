import { generateTopicVoices } from "./generate-tts";

const scenes = [
  {
    id: "scene1_hook",
    text: "Tại sao các ông lớn như Netflix hay Amazon đều chuyển toàn bộ hệ thống khổng lồ của họ sang Microservices?",
  },
  {
    id: "scene2_problem",
    text: "Trước đây với kiến trúc Monolith, toàn bộ ứng dụng bị nhồi chung một khối. Một tính năng nhỏ bị lỗi có thể kéo sập cả hệ thống!",
  },
  {
    id: "scene3_decompose",
    text: "Microservices giải quyết triệt để bằng cách chia nhỏ thành các dịch vụ độc lập: Auth, Giỏ hàng, Thanh toán, kết nối nhịp nhàng qua API Gateway.",
  },
  {
    id: "scene4_scaling",
    text: "Dịch vụ nào quá tải chỉ cần scale riêng dịch vụ đó, mỗi nhóm kỹ sư tự do chọn ngôn ngữ tối ưu như Go, Nodejs hay Python.",
  },
  {
    id: "scene5_impact",
    text: "Hệ thống đạt độ sẵn sàng cao và deploy liên tục, nhưng đòi hỏi trình độ DevOps vững vàng để quản lý mạng lưới phức tạp.",
  },
  {
    id: "scene6_outro",
    text: "Microservices không phải viên đạn bạc, hãy áp dụng đúng thời điểm. Follow kênh để nâng tầm kiến trúc mỗi ngày nhé!",
  },
];

(async () => {
  try {
    const result = await generateTopicVoices("MicroservicesExplainer", scenes);
    console.log("✅ Microservices audio generation completed!");
    console.log(`Total frames: ${result.totalDurationFrames}`);
  } catch (e) {
    console.error("❌ Error:", e);
    process.exit(1);
  }
})();
