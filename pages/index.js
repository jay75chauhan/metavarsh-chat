import Head from "next/head";
import Login from "../components/Login";
import { useMoralis } from "react-moralis";
export default function Home() {
  const { isAuthenticated } = useMoralis();

  if (!isAuthenticated) return <Login />;
  return (
    <div className="h-screen">
      <Head>
        <title>welcome to Metaverse chat</title>
        <link rel="icon" href="/meta.png" />
      </Head>

      <h1>welcome to metaverse chat</h1>
    </div>
  );
}
