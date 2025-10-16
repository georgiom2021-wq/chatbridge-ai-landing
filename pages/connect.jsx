import BridgeCreator from "../components/BridgeCreator";
import Meta from "../components/Meta";

export default function ConnectPage() {
  return (
    <>
      {/* ✅ SEO + OG мета */}
      <Meta
        title="Connect Bridge | ChatBridge AI"
        description="Create your ChatBridge AI link and instantly connect with friends across languages in Telegram."
      />

      {/* ✅ Контент страницы */}
      <main className="min-h-screen flex items-center justify-center bg-gradient-to-br from-indigo-100 to-purple-100 p-6">
        <section className="max-w-lg w-full">
          <div className="text-center mb-8">
            <h1 className="text-3xl font-bold mb-2">🌉 Connect Your Bridge</h1>
            <p className="text-gray-600 text-sm">
              Enter your friend’s ChatBridge ID and generate a secure Telegram link to start chatting instantly.
            </p>
          </div>

          {/* Сам компонент BridgeCreator */}
          <BridgeCreator />
        </section>
      </main>
    </>
  );
}
