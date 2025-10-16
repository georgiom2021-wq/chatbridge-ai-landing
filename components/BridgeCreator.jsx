"use client";
import { useState } from "react";
import { motion } from "framer-motion";

export default function BridgeCreator() {
  const [id, setId] = useState("");
  const baseUrl = "https://t.me/ChatBridge_AI_Translator_bot";
  const link = id ? `${baseUrl}?start=connect_${id}` : "";

  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      className="max-w-md mx-auto p-6 rounded-2xl shadow-lg bg-white/80 backdrop-blur"
    >
      <h2 className="text-2xl font-bold text-center mb-4">
        🌉 Create Your Bridge
      </h2>
      <p className="text-sm text-gray-600 text-center mb-4">
        Enter your friend’s ChatBridge ID and get a Telegram link to connect instantly.
      </p>

      <div className="flex gap-2">
        <input
          type="number"
          placeholder="Enter friend’s ID"
          value={id}
          onChange={(e) => setId(e.target.value)}
          className="flex-1 px-4 py-2 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-400"
        />
        <button
          disabled={!id}
          onClick={() => window.open(link, "_blank")}
          className={`px-4 py-2 rounded-xl text-white transition-all ${
            id
              ? "bg-gradient-to-r from-indigo-500 to-purple-600 hover:shadow-md"
              : "bg-gray-300 cursor-not-allowed"
          }`}
        >
          Connect
        </button>
      </div>

      {link && (
        <p className="text-xs mt-3 text-center text-gray-500 break-all">
          <span className="font-semibold">Link:</span> {link}
        </p>
      )}
    </motion.div>
  );
}
