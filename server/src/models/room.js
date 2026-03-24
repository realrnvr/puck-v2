import mongoose from "mongoose";

const RoomSchema = new mongoose.Schema(
  {
    roomId: { type: String, required: true, unique: true },

    hostId: { type: String, required: true },

    users: [
      {
        userId: String,
        socketId: String,
        name: String,
      },
    ],

    state: {
      chapter: String,
      page: Number,
    },
  },
  { timestamps: true },
);

export const Room = mongoose.model("Room", RoomSchema);
