import React, { useRef } from "react";
import { useMoralis, useMoralisQuery } from "react-moralis";
import Message from "./Message";
import SendMessage from "./SendMessage";

//only show messages  feom the last 15 minutes
// const MISE_DURATION = 15;

// .greaterThan("createdAt", new Date(Date.now() - MISE_DURATION*60*1000))

function Messages() {
  const { user } = useMoralis();
  const endOfMessages = useRef(null);
  const { data, loading, error } = useMoralisQuery(
    "Messages",
    (query) => query.ascending("createdAt"),
    [],
    {
      live: true,
    }
  );

  return (
    <div className="pb-56">
      <div className="space-y-10 p-4 px-10">
        {data.map((message) => (
          <Message key={message.id} message={message} />
        ))}
      </div>

      <div className="flex justify-center">
        <SendMessage endOfMessages={endOfMessages} />
      </div>

      <div ref={endOfMessages} className="text-center text-gray-400 mt-5">
        <p>You're up to date {user.getUsername()}! 🎉</p>
      </div>
    </div>
  );
}

export default Messages;
