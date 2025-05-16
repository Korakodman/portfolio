import { useRef } from "react";
import emailjs from "@emailjs/browser";

export default function ContactForm() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_2kadhro",
        "template_rezqalg",
        form.current,
        "wug0SSal72-ScDUnf"
      )
      .then(
        () => {
          alert("ส่งข้อความเรียบร้อยแล้ว!");
        },
        (error) => {
          alert("เกิดข้อผิดพลาด: " + error.text);
        }
      );
  };

  return (
    <form ref={form} onSubmit={sendEmail} className="space-y-4">
      <input
        name="user_name"
        type="text"
        placeholder="ชื่อของคุณ"
        required
        className="w-full p-2 bg-gray-800 text-white rounded"
      />
      <input
        name="user_email"
        type="email"
        placeholder="อีเมล"
        required
        className="w-full p-2 bg-gray-800 text-white rounded"
      />
      <textarea
        name="message"
        placeholder="ข้อความของคุณ"
        required
        className="w-full p-2 bg-gray-800 text-white rounded h-32"
      />
      <button
        type="submit"
        className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded"
      >
        ส่งข้อความ
      </button>
    </form>
  );
}
