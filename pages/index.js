export default function Home() {
  return (
    <div style={{
      fontFamily: 'system-ui, sans-serif',
      textAlign: 'center',
      padding: '60px 20px',
      background: '#fafafa',
      minHeight: '100vh'
    }}>
      <img src="/logo.png" alt="ChatBridge AI logo" width="120" style={{ marginBottom: '20px' }} />
      <h1 style={{ fontSize: '2.5rem', marginBottom: '10px' }}>ChatBridge AI 🌍</h1>
      <p style={{ fontSize: '1.2rem', color: '#555' }}>
        Мост для общения без границ — понимай и говори на любом языке.
      </p>
      <div style={{ marginTop: '40px' }}>
        <a href="https://t.me/ChatBridge_AI_Translator_bot"
           style={{
             background: '#0070f3',
             color: '#fff',
             padding: '12px 24px',
             borderRadius: '8px',
             textDecoration: 'none',
             fontWeight: 'bold'
           }}>
          🚀 Открыть бота в Telegram
        </a>
      </div>
    </div>
  );
}
