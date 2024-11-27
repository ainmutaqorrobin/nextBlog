import { AppProps } from "next/app";
import Layout from "../components/layout/Layout";
import "../styles/globals.css";
import MainNav from "../components/layout/MainNav";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Layout>
      <MainNav />
      <Component {...pageProps} />
    </Layout>
  );
}

export default MyApp;
