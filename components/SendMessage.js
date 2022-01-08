import React, { useState } from "react";
import { useMoralis } from "react-moralis";

function SendMessage({ endOfMessages }) {
  const { user, Moralis } = useMoralis();
  const [message, setMessage] = useState("");

  const sendMessages = (e) => {
    e.preventDefault();
    if (!message) return;
    const Messages = Moralis.Object.extend("Messages");
    const messages = new Messages();
    messages
      .save({
        message: message,
        username: user.getUsername(),
        ethAddress: user.get("ethAddress"),
      })
      .then(
        (message) => {
          // the object was saved successfully
        },
        (error) => {
          // the save failed.
          // error is a Parse.Error with an error code and message.
          console.log(error.messages);
        }
      );

    endOfMessages.current.scrollIntoView({ behavior: "smooth" });

    setMessage("");
  };

  return (
    <form className="flex fixed bottom-10 bg-black opacity-80  w-11/12 px-6 py-3 max-w-2xl shadow-2xl rounded-full">
      <input
        className="outline-none pr-5 flex-grow bg-transparent text-white placeholder-slate-500"
        type="text"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        placeholder={`Enter a Message ${user.getUsername()}`}
      />
      <button
        onClick={sendMessages}
        type="submit"
        className="font-bold p-1 text-sky-500"
      >
        Send 🚀
      </button>
    </form>
  );
}

export default SendMessage;
