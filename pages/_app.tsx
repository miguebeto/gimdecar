import "../styles/globals.css";
import type { AppProps } from "next/app";
import "boxicons/css/boxicons.min.css";
import ReactGA from "react-ga4";

ReactGA.initialize("G-4DQJ6S8QQV");
ReactGA.send({ hitType: "pageview", page: "/", title: "GIMDECAR" });

function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}

export default MyApp;
