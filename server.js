const AppRouter = require("./routes/AppRouter");
const PORT = process.env.PORT || 3001;
const express = require("express");
const http = require("http");
const app = express();
const server = http.createServer(app);
const socket = require("socket.io");
const io = socket(server);
const path = require("path");

// Require Middleware
const logger = require("morgan");
const bodyParser = require("body-parser");
const cors = require("cors");
const helmet = require("helmet");
// Require Middleware

// Initialize Middleware
app.use(logger("dev"));
app.use(helmet({ contentSecurityPolicy: false }));
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "client", "build", "/index.html")));
// Initialize Middleware

app.disable("X-Powered-By");

app.get("/", (req, res) => res.send({ msg: "Petsagram Server Working" }));
app.use("/api", AppRouter);

app.get("*", (req, res) =>
  res.sendFile(path.join(__dirname, "client", "build", "index.html"))
);

io.on("connection", (socket) => {
  console.log(socket.id);
  socket.emit("your id", socket.id);
  socket.on("send message", (body) => {
    io.emit("message", body);
    // console.log(data);
  });
});

server.listen(PORT, () => console.log(`Server Started On Port: ${PORT}`));
