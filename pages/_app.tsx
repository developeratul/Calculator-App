import "../styles/style.css";
import { AppProps } from "next/app";
import { CounterProvider, ResultProvider } from "../context";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ResultProvider>
      <CounterProvider>
        <Component {...pageProps} />
      </CounterProvider>
    </ResultProvider>
  );
}
export default MyApp;
