import Image from "next/image";
import React from "react";
import { useMoralis } from "react-moralis";
import Avatar from "./Avatar";
import ChangeUserName from "./ChangeUserName";

function Header() {
  const { user, logout } = useMoralis();

  return (
    <div className="text-sky-500 bg-black shadow-xl sticky top-0 p-5 z-10 border-b-4 border-sky-500">
      <div className="grid grid-cols-5 lg:grid-cols-6 items-end lg:items-center">
        <div className="relative h-24 w-24 mx-auto hidden lg:inline-grid">
          <Image
            onClick={() => logout()}
            className="rounded-full cursor-pointer"
            objectFit="cover"
            src={
              "https://bernardmarr.com/wp-content/uploads/2021/12/The-8-Most-Important-Metaverse-Companies.jpg"
            }
            layout="fill"
          />
        </div>

        <div className="text-left lg:text-center col-span-4">
          <div className="relative  h-48 w-48 lg:mx-auto border-sky-600 rounded-full border-8">
            <Avatar logoutOnPress />
          </div>
          <h1 className="text-2xl w-full underline decoration-dashed decoration-sky-500">
            Welcome to Metaverse chat
          </h1>
          <h2 className="text-4xl  pb-4 font-bold truncate mt-3">
            {user.getUsername()}
          </h2>
        </div>

        <ChangeUserName />
      </div>
    </div>
  );
}

export default Header;
