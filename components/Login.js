import Image from "next/image";
import React from "react";
import gif from "../public/ani.gif";

function Login() {
  return (
    <div className="bg-black relative text-white h-s">
      <div className=" mt-24 flex  flex-col absolute z-50 items-center space-y-8 h-4/6 w-full justify-center">
        <Image
          className="object-cover rounded-full "
          src="https://bernardmarr.com/wp-content/uploads/2021/12/The-8-Most-Important-Metaverse-Companies.jpg"
          height={150}
          width={150}
        />

        <button className=" px-4 py-3 rounded-xl  font-semibold  cursor-pointer bg-gradient-to-r from-violet-600 to-fuchsia-600  active:scale-90 transition translate ease-out">
          Login to MetaVerse
        </button>
      </div>

      <div className="flex items-center  justify-center W-full h-screen">
        <Image src={gif} />
      </div>
    </div>
  );
}

export default Login;
