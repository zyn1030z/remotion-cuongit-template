import { generateTopicVoices } from "./generate-tts";

const scenes = [
  {
    id: "scene1_hook",
    text: "Bạn có biết SSL là gì và tại sao mỗi website đều bắt buộc phải có ổ khóa xanh trên thanh địa chỉ không?",
  },
  {
    id: "scene2_problem",
    text: "Nếu không có SSL, mọi dữ liệu như mật khẩu, số thẻ ngân hàng đều bị gửi dưới dạng văn bản trần, hacker có thể đọc được ngay lập tức.",
  },
  {
    id: "scene3_concept1",
    text: "SSL tạo ra một đường hầm mã hóa giữa trình duyệt và máy chủ, biến toàn bộ dữ liệu thành chuỗi ký tự không thể giải mã được.",
  },
  {
    id: "scene4_concept2",
    text: "Quá trình bắt tay SSL gồm 3 bước: trình duyệt gửi yêu cầu, máy chủ trả về chứng chỉ số, rồi hai bên tạo khóa phiên để mã hóa.",
  },
  {
    id: "scene5_impact",
    text: "Google ưu tiên xếp hạng website có SSL, và người dùng tin tưởng trang có ổ khóa xanh hơn gấp 3 lần so với trang không có.",
  },
  {
    id: "scene6_outro",
    text: "SSL là lớp bảo vệ đầu tiên cho mọi ứng dụng web. Follow kênh để cập nhật kiến thức bảo mật mỗi ngày nhé!",
  },
];

(async () => {
  try {
    const result = await generateTopicVoices("SSLExplainer", scenes);
    console.log("✅ SSL audio generation completed!");
    console.log(`Total frames: ${result.totalDurationFrames}`);
  } catch (e) {
    console.error("❌ Error:", e);
    process.exit(1);
  }
})();
