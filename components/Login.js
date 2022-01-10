import Image from "next/image";
import React from "react";
import gif from "../public/ani.gif";
import lo from "../public/lo.gif";
import h from "../public/compass.png";

import { useMoralis } from "react-moralis";
import Head from "next/head";
function Login() {
  const { authenticate, isAuthenticating, authError } = useMoralis();

  return (
    <div className="bg-black relative text-white h-s">
      <Head>
        <title>Metaverse Login</title>
        <link rel="icon" href="/compass.png" />
      </Head>
      <div className=" mt-24 flex  flex-col absolute z-50 items-center space-y-8 h-4/6 w-full justify-center">
        <Image
          className="object-cover rounded-full "
          src={h}
          height={150}
          width={150}
        />

        <button
          onClick={() => {
            authenticate(),
              authError &&
                alert(
                  "👉",
                  authError,
                  "⛔ our you need to add web 3 wallet EX-MetaMask Wallet"
                );
          }}
          className=" px-2 py-3 rounded-xl  font-semibold  cursor-pointer bg-gradient-to-r from-violet-600 to-fuchsia-600 hover:scale-110 active:scale-90 transition translate ease-out"
        >
          Login to MetaVerse
        </button>
      </div>

      <div className="flex items-center  justify-center W-full h-screen">
        {isAuthenticating ? <Image src={lo} /> : <Image src={gif} />}
      </div>
    </div>
  );
}

export default Login;
