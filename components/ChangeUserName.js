import React from "react";
import { useMoralis } from "react-moralis";
import { Dialog, Transition } from "@headlessui/react";
import { Fragment, useState } from "react";
function ChangeUserName() {
  const { setUserData, isUserUpdating, userError, user } = useMoralis();
  let [isOpen, setIsOpen] = useState(false);
  let [userN, setUserN] = useState("");

  function closeModal() {
    setIsOpen(false);
  }

  function openModal() {
    setIsOpen(true);
  }
  const setUserName = () => {
    if (!userN) return;

    setUserData({
      username: userN,
    });

    closeModal();
  };
  return (
    <>
      <div className="text-sm absolute top-5 right-5">
        <button
          type="button"
          onClick={openModal}
          className="hover:text-sky-700 p-2 rounded-2xl bg-gray-800"
        >
          Change your UserName
        </button>
      </div>

      <Transition appear show={isOpen} as={Fragment}>
        <Dialog
          as="div"
          className="fixed inset-0 z-10 overflow-y-auto bg-[#111] bg-opacity-30"
          onClose={closeModal}
        >
          <div className="min-h-screen px-4 text-center">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0"
              enterTo="opacity-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <Dialog.Overlay className="fixed inset-0" />
            </Transition.Child>

            {/* This element is to trick the browser into centering the modal contents. */}
            <span
              className="inline-block h-screen align-middle"
              aria-hidden="true"
            >
              &#8203;
            </span>
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 scale-95"
              enterTo="opacity-100 scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 scale-100"
              leaveTo="opacity-0 scale-95"
            >
              <div className="inline-block w-full max-w-md p-6 my-8 overflow-hidden text-left align-middle transition-all transform bg-gradient-to-b from-slate-900 to-blue-900 border-2 border-sky-800 shadow-xl rounded-2xl">
                <div>
                  <div className="flex flex-col ">
                    <h2 className="text-gray-300 text-center">
                      current user name is:
                    </h2>
                    <h3 className="text-gray-300 font-semibold text-center">
                      {user.getUsername()}
                    </h3>
                    <input
                      type="text"
                      placeholder="Enter your new UserName"
                      value={userN}
                      className="mt-3 rounded-xl text-center pr-2 bg-gradient-to-b from-black to-blue-900 border-2 border-sky-900 w-full outline-none text-gray-300 font-semibold p-2"
                      onChange={(e) => setUserN(e.target.value)}
                    />

                    <button
                      disabled={isUserUpdating}
                      onClick={setUserName}
                      className="mx-auto mt-5 px-5 text-gray-300 rounded-2xl py-3 bg-gradient-to-b hover:scale-105 from-black to-blue-900 border-2 border-sky-900 "
                    >
                      Submit
                    </button>
                  </div>
                </div>
              </div>
            </Transition.Child>
          </div>
        </Dialog>
      </Transition>
    </>
  );
}

export default ChangeUserName;
