import socketio from "socket.io";

export default async ({ app, server }) => {
  const io = socketio(server);
  app.set("io", io);
};
