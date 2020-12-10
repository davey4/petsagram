import React, { useState } from "react";
import Pusher from "pusher-js";

const Messaging = () => {
  const [message, setMessage] = useState("hello");

  Pusher.logToConsole = true;

  let pusher = new Pusher("846611c5a7b391a138dd", {
    cluster: "mt1",
  });

  let channel = pusher.subscribe("frightened-prize-648");

  channel.bind("my-event", function (data) {
    console.log(JSON.stringify(data));
  });

  channel.bind("client-message", (data, metadata) => {
    console.log(data, metadata.user_id);
  });

  return (
    <section>
      <div>
        <h1 className="heading">Direct Messaging Coming Soon!</h1>
      </div>
    </section>
  );
};

export default Messaging;
