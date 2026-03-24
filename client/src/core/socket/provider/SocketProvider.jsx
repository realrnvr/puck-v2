import { SocketContext } from "../context/SocketContext";
import { socket } from "../core/socket";

export function SocketProvider({ children }) {
  return <SocketContext value={socket}>{children}</SocketContext>;
}
