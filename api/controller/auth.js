exports.google = (req, res) => {
  const io = req.app.get('io');
  const user = {
    name: req.user.googleId,
  };
  io.in(req.session.socketId).emit('google', user);
  res.end();
};
