exports.google = (req, res) => {
  const io = req.app.get('io');
  const user = {
    givenName: req.user.givenName,
    familyName: req.user.familyName,
    picture: req.user.picture.replace('=s96', '=s40'),
  };
  io.in(req.session.socketId).emit('google', user);
  res.end();
};
