const AppRouter = require("./routes/AppRouter");
const PORT = process.env.PORT || 3001;
const express = require("express");
const http = require("http")
const app = express();

const server = http.createServer(app);
const socket = require("socket.io")
const io = socket(server);


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


io.on("connection", (socket) => {
  console.log(socket.id);
  socket.emit("your id", socket.id);
  socket.on("send message", (body) => {
    io.emit("message", body);
    // console.log(data);
  });
});

server.listen(PORT, () => console.log(`Server Started On Port: ${PORT}`));

