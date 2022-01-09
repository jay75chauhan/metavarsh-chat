import Head from "next/head";
import Login from "../components/Login";
import { useMoralis } from "react-moralis";
import Header from "../components/Header";
import Messages from "../components/Messages";
export default function Home() {
  const { isAuthenticated } = useMoralis();

  if (!isAuthenticated) return <Login />;
  return (
    <div className="h-screen overflow-y-scroll bg-gradient-to-b from-black to-blue-900 overflow-hidden">
      <Head>
        <title>welcome to Metaverse chat</title>
        <link rel="icon" href="/compass.png" />
      </Head>

      <div className="max-w-screen-xl mx-auto">
        <Header />
        <Messages />
      </div>
    </div>
  );
}
