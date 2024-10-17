import { Router } from 'express';
import { discordAuth , discordCallback} from './controller';

const router = Router();

router.get('/auth/discord', discordAuth);
router.get('/auth/discord/callback', discordCallback);
router.get('/auth/user', (req, res) => {
  console.log({ user: req.user, session: req.session, cookies: req.cookies });
  console.log(req.isAuthenticated());
  if (!req.isAuthenticated()) {
      return res.status(401).json({ error: 'Unauthorized' });
    }
    res.json(req.user);
});
router.get('/auth/logout', (req, res, next) => {
    req.logout(function(err) {
        if (err) { return next(err); }
        res.redirect('/');
      });

});
export default router;
