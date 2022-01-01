import Image from "next/image";
import React from "react";

function Login() {
  return (
    <div className="bg-black relative text-white">
      <div className="flex flex-col absolute z-50 items-center space-y-4 h-4/6 w-full justify-center">
        <Image
          className="object-cover rounded-full"
          src="https://bernardmarr.com/wp-content/uploads/2021/12/The-8-Most-Important-Metaverse-Companies.jpg"
          height={200}
          width={200}
        />

        <button className="px-3 py-2 rounded-xl bg-blue-500  font-semibold  cursor-pointer">
          Login to MetaVerse
        </button>
      </div>

      <div className="W-full h-screen">
        <Image
          src="https://links.papareact.com/55n"
          objectFit="cover"
          layout="fill"
        />
      </div>
    </div>
  );
}

export default Login;
