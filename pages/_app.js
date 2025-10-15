import "../styles/globals.css";
import Meta from "../components/Meta";

export default function App({ Component, pageProps }) {
  return (
    <main>
      <Meta />
      <Component {...pageProps} />
    </main>
  );
}
