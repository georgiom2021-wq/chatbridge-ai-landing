import Link from "next/link";

export default function Contact() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-blue-50 to-indigo-100 px-6 text-center">
      <h1 className="text-4xl font-bold text-gray-900 mb-4">Связаться с нами</h1>
      <p className="text-gray-600 mb-8 max-w-xl">У вас есть идеи, вопросы или предложения?<br/>Мы всегда открыты к общению!</p>
      <div className="space-y-4 text-lg text-gray-700">
        <p>📧 Email: <a href="mailto:hello@chatbridge.ai" className="text-blue-600 hover:underline">hello@chatbridge.ai</a></p>
        <p>💬 Telegram: <Link href="https://t.me/ChatBridge_AI_Translator_bot" className="text-blue-600 hover:underline">@ChatBridge_AI_Translator_bot</Link></p>
        <p>🧑‍💻 GitHub: <Link href="https://github.com/chatbridge-ai" className="text-blue-600 hover:underline">chatbridge-ai</Link></p>
      </div>
    </div>
  );
}
