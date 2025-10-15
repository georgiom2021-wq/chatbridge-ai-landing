import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-sky-50 to-indigo-100 text-center px-6">
      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1 }} className="max-w-3xl">
        <div className="flex flex-col items-center mb-8">
          <Image src="/logo-full.svg" alt="ChatBridge AI Logo" width={220} height={60} className="mb-4" />
          <h1 className="text-4xl sm:text-5xl font-bold text-gray-900">AI, который строит мосты между людьми 🌍</h1>
          <p className="mt-4 text-lg text-gray-600">Перевод сообщений в реальном времени.<br/>Общайтесь без языковых барьеров — просто говорите, а бот всё переведёт.</p>
        </div>
        <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.97 }} className="inline-block">
          <Link href="https://t.me/ChatBridge_AI_Translator_bot" target="_blank" className="px-6 py-3 text-white bg-gradient-to-r from-teal-500 to-blue-600 rounded-full text-lg font-semibold shadow-lg hover:shadow-xl transition-all">
            🚀 Попробовать в Telegram
          </Link>
        </motion.div>
        <div className="mt-10 flex justify-center space-x-6 text-gray-500">
          <Link href="/pricing" className="hover:text-blue-600">Цены</Link>
          <Link href="/contact" className="hover:text-blue-600">Контакты</Link>
          <Link href="/bridge" className="hover:text-blue-600">Создать мост</Link>
        </div>
      </motion.div>
    </div>
  );
}
