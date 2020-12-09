const AppRouter = require("./routes/AppRouter");
const express = require("express");
const PORT = process.env.PORT || 3001;
const app = express();
const server = require("http").createServer(app);
const io = require("socket.io")(server);

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

app.get("/", (req, res) => res.send({ msg: "Petsagram Server Working" }));
app.use("/api", AppRouter);

io.on("connection", (socket) => {
  // console.log(socket.id);
  socket.emit("news", "world");
  //   socket.on("my other event", (data) => {
  // console.log(data);
  //   });
});

app.listen(PORT, () => console.log(`Server Started On Port: ${PORT}`));
