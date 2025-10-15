import Head from 'next/head'
import { motion } from 'framer-motion'
export default function Home(){ return (
<>
  <Head>
    <title>ChatBridge AI — Bridge for Conversations</title>
    <meta name="description" content="ChatBridge AI — smart Telegram bot that connects people across languages." />
    <link rel="icon" href="/favicon.ico" />
  </Head>
  <main className="min-h-screen bg-white text-slate-900 antialiased">
    <div className="max-w-6xl mx-auto px-6 py-16">
      <header className="flex items-center justify-between mb-12">
        <div className="flex items-center gap-4">
          <div className="w-12 h-12 rounded-md bg-gradient-to-r from-indigo-600 to-cyan-400 flex items-center justify-center text-white font-bold">CB</div>
          <div>
            <h1 className="text-lg font-semibold">ChatBridge AI</h1>
            <p className="text-sm text-slate-500">Bridge for conversations — speak freely, beyond languages</p>
          </div>
        </div>
        <nav className="flex items-center gap-3">
          <a href="https://t.me/ChatBridge_AI_Translator_bot" target="_blank" rel="noreferrer" className="px-4 py-2 rounded-full bg-indigo-600 text-white">Try in Telegram</a>
          <a href="#about" className="px-4 py-2 rounded-full border border-slate-200 text-slate-700">About</a>
        </nav>
      </header>
      <section className="grid md:grid-cols-2 gap-10 items-center">
        <motion.div initial={{ x: -20, opacity: 0}} animate={{ x:0, opacity:1}} transition={{duration:0.5}}>
          <h2 className="text-4xl md:text-5xl font-extrabold leading-tight">ChatBridge AI — Speak freely, beyond languages 🌍</h2>
          <p className="mt-6 text-lg text-slate-600 max-w-xl">An intelligent Telegram bridge that translates messages in real-time and connects people across cultures. Create bridges, chat naturally — we handle the rest.</p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a href="https://t.me/ChatBridge_AI_Translator_bot" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-indigo-600 text-white shadow-lg hover:scale-105 transition">💬 Try in Telegram</a>
            <a href="#about" className="inline-flex items-center gap-2 px-6 py-3 rounded-full border border-slate-200 text-slate-800 hover:bg-slate-50 transition">🌍 About ChatBridge AI</a>
          </div>
          <div className="mt-8 grid grid-cols-1 sm:grid-cols-3 gap-4">
            <div className="p-4 border rounded">Realtime translation</div>
            <div className="p-4 border rounded">Smart conversation bridges</div>
            <div className="p-4 border rounded">Privacy-first</div>
          </div>
        </motion.div>
        <motion.div initial={{ scale: 0.98, opacity: 0}} animate={{ scale:1, opacity:1}} transition={{duration:0.5}}>
          <div className="bg-slate-50 rounded-2xl p-6 shadow-sm">
            <div className="text-sm text-slate-500 mb-4">Live preview</div>
            <div className="space-y-3">
              <div className="p-3 rounded bg-white border">🇪🇸 Amigo: Hola, ¿cómo estás?</div>
              <div className="p-3 rounded bg-indigo-600 text-white self-end">Я: Привет! Всё хорошо.</div>
              <div className="p-3 rounded bg-white border">🇺🇸 John: Are you free today?</div>
              <div className="p-3 rounded bg-white border">🇫🇷 Pierre: Bonjour!</div>
            </div>
          </div>
        </motion.div>
      </section>
      <section id="about" className="mt-20">
        <h3 className="text-2xl font-bold">How it works</h3>
        <div className="mt-4 text-slate-600 max-w-3xl">
          <ol className="list-decimal ml-5 space-y-2">
            <li>Install the Telegram bot and /start.</li>
            <li>Create a bridge by connecting friends via /connect or an invite link.</li>
            <li>Bot auto-detects languages and translates messages in real-time.</li>
          </ol>
        </div>
      </section>
      <footer className="mt-20 border-t pt-8 flex flex-col md:flex-row justify-between items-center text-sm text-slate-500">
        <div>© 2025 ChatBridge AI — bridging people across languages 🌍</div>
        <div className="mt-4 md:mt-0">Built with ❤️ · <a href="https://t.me/ChatBridge_AI_Translator_bot" className="text-indigo-600">Telegram bot</a></div>
      </footer>
    </div>
  </main>
</>
) }
