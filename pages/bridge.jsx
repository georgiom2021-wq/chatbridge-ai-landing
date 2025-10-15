import { useState } from "react";
import { motion } from "framer-motion";

export default function Bridge() {
  const [partnerId, setPartnerId] = useState("");
  const [link, setLink] = useState("");

  const generateLink = () => {
    if (!partnerId.trim() || isNaN(Number(partnerId))) {
      alert("Введите корректный Telegram ID");
      return;
    }
    const tgLink = `https://t.me/ChatBridge_AI_Translator_bot?start=connect_${partnerId}`;
    setLink(tgLink);
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-indigo-50 to-blue-100 px-6 text-center">
      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} className="max-w-lg bg-white rounded-2xl shadow-xl p-10 border border-gray-100">
        <h1 className="text-3xl font-bold text-gray-900 mb-4">🔗 Создай мост</h1>
        <p className="text-gray-600 mb-6">Введи Telegram ID друга, чтобы создать ссылку для подключения в ChatBridge AI.</p>

        <input
          type="text"
          value={partnerId}
          onChange={(e) => setPartnerId(e.target.value)}
          placeholder="Например: 123456789"
          className="w-full border border-gray-300 rounded-lg px-4 py-2 text-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
        />

        <motion.button whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} onClick={generateLink} className="mt-6 w-full bg-gradient-to-r from-teal-500 to-blue-600 text-white py-3 rounded-lg font-semibold shadow hover:shadow-lg transition">
          Сгенерировать ссылку
        </motion.button>

        {link && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5 }} className="mt-6 p-4 bg-blue-50 border border-blue-100 rounded-lg">
            <p className="text-gray-700 mb-3 break-all">{link}</p>
            <a href={link} target="_blank" rel="noopener noreferrer" className="inline-block px-5 py-2 bg-gradient-to-r from-blue-600 to-teal-500 text-white rounded-full shadow hover:shadow-lg transition">
              Открыть в Telegram
            </a>
          </motion.div>
        )}
      </motion.div>
    </div>
  );
}
