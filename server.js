const AppRouter = require("./routes/AppRouter");
const PORT = process.env.PORT || 3001;
const express = require("express");
const http = require("http");
const app = express();

const server = http.createServer(app);
const io = require("socket.io")();
io.listen(server);

// const io = socket()(PORT);
console.log();
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

server.listen(PORT, () => console.log(`Server Started On Port: ${PORT}`));
io.on("connection", (socket) => {
  console.log(socket.id);
  socket.emit("your id", socket.id);
  socket.on("message", (body) => {
    io.emit("message", body);
    console.log(body);
    // console.log(data);
  });
});
