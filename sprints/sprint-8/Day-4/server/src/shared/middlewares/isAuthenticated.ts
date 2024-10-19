export const isAuthenticated = (req, res, next) => {
  console.log({ user: req.user, session: req.session, cookies: req.cookies });
  console.log(req.isAuthenticated());
  if (!req.isAuthenticated()) {
    return res.status(401).json({ error: 'Unauthorized' });
  }
  next();
};
