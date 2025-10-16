import BridgeCreator from "../components/BridgeCreator";
import Meta from "../components/Meta";

export default function ConnectPage() {
  return (
    <>
      <Meta
        title="Создать мост | ChatBridge AI"
        description="Создайте ссылку для подключения в Telegram и начните общение без языковых барьеров."
      />

      <main className="min-h-screen flex items-center justify-center bg-gradient-to-br from-indigo-100 to-purple-100 p-6">
        <section className="max-w-lg w-full">
          <div className="text-center mb-8">
            <h1 className="text-3xl font-bold mb-2">🌉 Создайте ваш мост</h1>
            <p className="text-gray-600 text-sm">
              Введите ID друга, и мы сгенерируем ссылку для подключения в Telegram.
            </p>
          </div>

          {/* Компонент генератора deeplink */}
          <BridgeCreator />
        </section>
      </main>
    </>
  );
}
