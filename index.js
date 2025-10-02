const express = require("express");
const cors = require("cors");
const connectToDb = require("./db");
const userRoutes = require("./Routes/userRequest");
const canvasRoutes = require("./Routes/canvasRoutes");
require("dotenv").config();

const app = express();
const port = process.env.PORT || 5000;

// --- MIDDLEWARE ---

app.use(cors({
  origin: "https://white-board-cw8od8ysl-praphuls-projects.vercel.app",
  credentials: true,
}));

app.use(express.json({ limit: "100mb" })); // or higher depending on your needs
app.use(express.urlencoded({ limit: "100mb", extended: true }));
// --- ROUTES ---
connectToDb();
app.use("/", userRoutes);
app.use("/canvas", canvasRoutes);

// --- CREATE HTTP SERVER AND SOCKET.IO ---
const http = require("http");
const { Server } = require("socket.io");

const server = http.createServer(app);
const io = new Server(server, {
  cors: {
    origin: "https://white-board-cw8od8ysl-praphuls-projects.vercel.app",
    methods: ["GET", "POST","PUT","DELETE"],
    credentials: true,
  },
});

// --- SOCKET.IO LOGIC ---
io.on("connection", (socket) => {
  console.log("User connected:", socket.id);

  // Join canvas room
  socket.on("joinCanvas", (canvasId) => {
    socket.join(canvasId);
    console.log(`User ${socket.id} joined canvas ${canvasId}`);
    socket.to(canvasId).emit("userJoined", { userId: socket.id });
  });

  // Broadcast updates to other users in the room
  socket.on("updateCanvas", ({ canvasId, data }) => {
    socket.to(canvasId).emit("canvasUpdated", data);
  });

  socket.on("disconnect", () => {
    console.log("User disconnected:", socket.id);
  });
});

// --- START SERVER ---
server.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
