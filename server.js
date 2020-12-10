const AppRouter = require("./routes/AppRouter");
const express = require("express");
const PORT = process.env.PORT || 3001;
const app = express();

const http = require("http").Server(app);
const io = require("socket.io")(http);

// const server = require("http").createServer(app);
// const io = require("socket.io")(server);

// Require Middleware
const logger = require("morgan");
const bodyParser = require("body-parser");
const cors = require("cors");

// Require Middleware

// Initialize Middleware
app.use(logger("dev"));
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Initialize Middleware
io.on("connection", function (socket) {
  console.log("a user connected");

  // 'disconnect' is an event sockets produce automatically.
  socket.on("disconnect", function () {
    console.log("user disconnected");
  });

  // When the server receives our custom 'send-chat' event it simply
  // emits the message globally to all of the other sockets.
  socket.on("send-chat", function (msg) {
    console.log(msg);
    io.emit("receive-chat", msg);
  });
});

app.get("/", (req, res) => res.send({ msg: "Petsagram Server Working" }));
app.use("/api", AppRouter);

http.listen(PORT, () => console.log(`Server Started On Port: ${PORT}`));
