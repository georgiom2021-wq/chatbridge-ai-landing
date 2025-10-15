import Head from "next/head";

export default function Meta({
  title = "ChatBridge AI — Telegram мост для общения без языковых барьеров",
  description = "ChatBridge AI — Telegram-бот, который переводит сообщения в реальном времени и позволяет людям со всего мира свободно общаться.",
  image = "/og-image.png",
  url = "https://chatbridge.ai",
}) {
  return (
    <Head>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image} />
      <meta property="og:url" content={url} />
      <meta property="og:type" content="website" />
      <meta name="twitter:card" content="summary_large_image" />
      <link rel="icon" href="/logo-icon.svg" />
    </Head>
  );
}
