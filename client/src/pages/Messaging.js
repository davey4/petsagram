import React, { useEffect } from "react";
import { io } from "socket.io-client";
// const socket = io("http://localhost:3001");

const Messaging = (props) => {
  // useEffect(() => {
  //   socket.on("connection", (arg) => {
  //     console.log("connected"); // world
  //   });
  // }, []);
  // testing
  return (
    <section className="message-section">
      <h1 className="heading">Messages</h1>
    </section>
  );
};

export default Messaging;
