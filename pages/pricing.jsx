import { motion } from "framer-motion";
import Link from "next/link";

const plans = [
  { name: "Free", price: "0$", features: ["1 мост", "Перевод 60+ языков", "Без регистрации"] },
  { name: "Pro", price: "5$ / мес", features: ["3 моста", "История чатов", "Приоритетные сервера"] },
  { name: "Team", price: "15$ / мес", features: ["10 мостов", "Общий переводчик", "Поддержка 24/7"] },
];

export default function Pricing() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-white to-blue-50 py-20 text-center px-6">
      <h1 className="text-4xl font-bold mb-12 text-gray-900">💎 Тарифы ChatBridge AI</h1>
      <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {plans.map((plan) => (
          <motion.div key={plan.name} whileHover={{ scale: 1.05 }} className="bg-white rounded-2xl shadow-lg p-8 border border-gray-100">
            <h2 className="text-2xl font-semibold mb-4 text-gray-800">{plan.name}</h2>
            <p className="text-3xl font-bold text-blue-600 mb-6">{plan.price}</p>
            <ul className="space-y-2 text-gray-600">
              {plan.features.map((f) => <li key={f}>✅ {f}</li>)}
            </ul>
            <Link href="https://t.me/ChatBridge_AI_Translator_bot" target="_blank" className="mt-8 inline-block px-5 py-2 bg-gradient-to-r from-teal-500 to-blue-600 text-white rounded-full shadow hover:shadow-lg transition">
              Попробовать
            </Link>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
