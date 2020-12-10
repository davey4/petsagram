import React, { useState, useEffect, useRef } from "react";
import { Button, TextField } from "react-md";
import { io } from "socket.io-client";
// const socket = io("http://localhost:3001");

const Messaging = () => {
  const [yourId, setYourId] = useState();
  const [messages, setMessages] = useState([]);
  const [message, setMessage] = useState("");

  const socketRef = useRef();

  useEffect(() => {
    socketRef.current = io.connect("/");

    socketRef.current.on("your id", (id) => {
      setYourId(id);
    });

    socketRef.current.on("message", (message) => {
      console.log("here");
      receivedMessage(message);
    });
  }, []);

  function receivedMessage(message) {
    setMessages((oldMsgs) => [...oldMsgs, message]);
  }

  function sendMessage(e) {
    e.preventDefault();
    const messageObject = {
      body: message,
      id: yourId,
    };
    setMessage("");
    socketRef.current.emit("message", messageObject);
  }

  function handleChange(e) {
    setMessage(e.target.value);
  }

  return (
    <section className="message-section">
      <h1 className="heading">Messages</h1>

      {messages.map((message, index) => {
        if (message.id === yourId) {
          return (
            <div className="my-message" key={index}>
              <h4>{message.body}</h4>
            </div>
          );
        }
        return (
          <div className="other-message" key={index}>
            <h4>{message.body}</h4>
          </div>
        );
      })}

      <form onSubmit={sendMessage}>
        <TextField value={message} onChange={handleChange} placeholder="..." />
        <Button theme="primary" themeType="contained">
          Send
        </Button>
      </form>
    </section>
  );
};

export default Messaging;
