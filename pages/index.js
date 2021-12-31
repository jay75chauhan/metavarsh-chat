import Head from "next/head";
import Login from "../components/Login";

export default function Home() {
  const isAuthenticated = false;

  if (!isAuthenticated) return <Login />;
  return (
    <div className="text-black">
      <Head>
        <title>Metaverse chat</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <h1>welcome to metaverse chat</h1>
    </div>
  );
}
