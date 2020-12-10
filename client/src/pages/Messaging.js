import React, { useState, useEffect } from "react";
import Pusher from "pusher-js";
import { Button, TextField } from "react-md";

const Messaging = () => {
  // useState = [message, setMessage] = useState("hello");

  Pusher.logToConsole = true;

  let pusher = new Pusher("846611c5a7b391a138dd", {
    cluster: "mt1",
  });

  let channel = pusher.subscribe("my-channel");
  channel.bind("my-event", function (data) {
    alert(JSON.stringify(data));
  });

  channel.bind("sent message", () => {
    // console.log("hello");
  });

  return (
    <section className="message-section">
      <h1 className="heading">Messages</h1>
      <h1 className="heading">Under Construction</h1>
    </section>
  );
};

export default Messaging;
