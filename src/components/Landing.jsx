import React from "react";

export default function Landing() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center px-6 text-center bg-gradient-to-b from-white to-gray-100">
      <h1 className="text-5xl font-bold mb-6">ChatBridge AI 🌍</h1>
      <p className="text-lg text-gray-600 max-w-xl mb-8">
        Умный мост для общения без границ. <br />
        Понимай и говори с кем угодно — на любом языке.
      </p>
      <a
        href="https://t.me/ChatBridge_AI_Translator_bot"
        className="bg-blue-500 hover:bg-blue-600 text-white text-lg px-6 py-3 rounded-full shadow-md transition"
      >
        💬 Открыть в Telegram
      </a>
      <footer className="mt-12 text-gray-500 text-sm">
        © {new Date().getFullYear()} ChatBridge AI · Created with ❤️ by the ChatBridge Team
      </footer>
    </div>
  );
}
