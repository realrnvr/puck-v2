import "./test.css";

import { useEffect } from "react";
import { createModule } from "yet-another-react-lightbox";

function Test({ children, room }) {
  useEffect(() => {
    function onConnect() {
      console.log("connected:", room.socket.id);
    }

    function onDisconnect() {
      console.log("disconnected");
    }

    room.socket.on("connect", onConnect);
    room.socket.on("disconnect", onDisconnect);

    return () => {
      room.socket.off("connect", onConnect);
      room.socket.off("disconnect", onDisconnect);
    };
  }, [room]);

  return (
    <>
      {children}
      <div className="test">
        <h2>Room Panel</h2>

        <button onClick={room.createRoom}>Create Room</button>

        <div style={{ marginTop: "10px" }}>
          <input
            placeholder="Enter room ID"
            value={room.roomInput}
            onChange={(e) => room.setRoomInput(e.target.value)}
          />
          <button onClick={room.joinRoom}>Join Room</button>
        </div>

        <div style={{ marginTop: "20px" }}>
          <p>Joined Room: {room.joinedRoom}</p>
          <p>Role: {room.isHost ? "Host" : "Participant"}</p>
        </div>
        <div style={{ marginTop: "20px" }}>
          <h3>Room Messages</h3>

          <input
            value={room.message}
            onChange={(e) => room.setMessage(e.target.value)}
            placeholder="Type message"
          />
          <button onClick={room.sendMessage}>Send</button>

          <div style={{ marginTop: "10px" }}>
            {room.messages.map((m, i) => (
              <div key={i}>
                <b>{m.userId}</b>: {m.message}
              </div>
            ))}
          </div>
        </div>
        <div style={{ marginTop: "20px" }}>
          <h3>Test Sync</h3>

          <button
            onClick={() => room.sendStateUpdate({ chapter: "1", page: 1 })}
          >
            Go to Page 1
          </button>

          <button
            onClick={() => room.sendStateUpdate({ chapter: "1", page: 2 })}
          >
            Go to Page 2
          </button>
        </div>
      </div>
    </>
  );
}

const RoomModule = createModule("Room", Test);

export default function RoomPlugin({ addSibling }) {
  addSibling("controller", RoomModule);
}
