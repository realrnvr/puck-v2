import express from "express";
import cors from "cors";
// import http from "http";
// import { Server } from "socket.io";

import { config } from "dotenv";
config();

import { StatusCodes } from "http-status-codes";
import { router as mangaRouter } from "./router/manga.router.js";
import { errorHandler } from "./middleware/errorHandler.middleware.js";
import connectDB from "./db/connectDB.js";

const app = express();
const PORT = process.env.PORT || 3000;

app.use(
  cors({
    origin: [process.env.CLIENT_APP_URL, "http://localhost:4173"],
    credentials: true,
  }),
);
app.use(express.json());

app.get("/hello", (req, res) => {
  return res.status(StatusCodes.OK).json({ hell: "Hello world!" });
});

app.use("/api/v1/manga", mangaRouter);

app.use(errorHandler);

// const server = http.createServer(app);

// const io = new Server(server, {
//   cors: {
//     origin: [process.env.CLIENT_APP_URL, "http://localhost:4173"],
//     credentials: true,
//   },
// });

// const rooms = {};
// console.log("rooms: ", rooms);

// io.on("connection", (socket) => {
//   const userId = socket.handshake.auth.userId;

//   console.log("Connected:", userId, socket.id);

//   /* ---------------- CREATE ROOM ---------------- */

//   socket.on("create_room", () => {
//     const roomId = Math.random().toString(36).slice(2);

//     rooms[roomId] = {
//       roomId,
//       hostId: userId,
//       users: [
//         {
//           userId,
//           socketId: socket.id,
//         },
//       ],
//       state: {
//         chapter: "1",
//         page: 0,
//       },
//     };

//     socket.join(roomId);

//     socket.emit("room_created", {
//       roomId,
//       isHost: true,
//     });

//     console.log("Room created:", rooms[roomId]);
//   });

//   /* ---------------- JOIN ROOM ---------------- */

//   socket.on("join_room", ({ roomId }) => {
//     const room = rooms[roomId];

//     if (!room) {
//       socket.emit("error_msg", "Room not found");
//       return;
//     }

//     // 🔥 check if user already exists (refresh case)
//     const existingUser = room.users.find((u) => u.userId === userId);

//     if (existingUser) {
//       // 🔁 update socketId (reconnect)
//       existingUser.socketId = socket.id;
//     } else {
//       // ➕ new participant
//       room.users.push({
//         userId,
//         socketId: socket.id,
//       });
//     }

//     socket.join(roomId);

//     socket.emit("joined_room", {
//       roomId,
//       isHost: userId === room.hostId,
//       state: room.state,
//     });

//     // 👇 optional: notify others
//     socket.to(roomId).emit("user_joined", {
//       userId,
//     });

//     console.log("Room after join:", room);
//   });

//   socket.on("send_message", ({ roomId, message }) => {
//     const userId = socket.handshake.auth.userId;

//     console.log(`Message from ${userId} in room ${roomId}:`, message);

//     // send to everyone in the room (including sender if needed)
//     io.to(roomId).emit("receive_message", {
//       userId,
//       message,
//     });
//   });

//   socket.on("sync_state", ({ roomId, state }) => {
//     const userId = socket.handshake.auth.userId;
//     const room = rooms[roomId];

//     if (!room) return;
//     if (room.hostId !== userId) return;

//     // 🔥 store latest state
//     room.state = state;

//     socket.to(roomId).emit("state_update", state);
//   });

//   /* ---------------- DISCONNECT ---------------- */

//   socket.on("disconnect", () => {
//     console.log("Disconnected:", userId);

//     for (const roomId in rooms) {
//       const room = rooms[roomId];

//       // remove user
//       room.users = room.users.filter((u) => u.socketId !== socket.id);

//       // if host leaves → delete room (simple version)
//       if (room.hostId === userId) {
//         delete rooms[roomId];
//         io.to(roomId).emit("room_closed");
//       }
//     }
//   });
// });

(async () => {
  try {
    await connectDB(process.env.MONGO_DB_URI);
    app.listen(PORT, () => {
      console.log("Server is Listening to PORT " + PORT + " ...");
    });
  } catch (error) {
    console.log(error);
  }
})();
