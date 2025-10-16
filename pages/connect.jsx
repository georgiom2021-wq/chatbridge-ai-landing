import BridgeCreator from "@/components/BridgeCreator";
import Meta from "@/components/Meta";

export default function ConnectPage() {
  return (
    <>
      <Meta title="Connect Bridge | ChatBridge AI" description="Create a Telegram bridge and chat freely across languages." />
      <main className="min-h-screen flex items-center justify-center bg-gradient-to-br from-indigo-100 to-purple-100">
        <BridgeCreator />
      </main>
    </>
  );
}
