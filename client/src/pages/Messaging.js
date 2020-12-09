import React, { useEffect } from "react";
import { io } from "socket.io-client";
// const socket = io("http://localhost:3001/admin");

const Messaging = (props) => {
  //   useEffect(() => {
  //     socket.on("hello", (arg) => {
  //       console.log(arg); // world
  //     });
  //   }, []);
  return (
    <section>
      <div>Messaging</div>
    </section>
  );
};

export default Messaging;
