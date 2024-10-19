import { Router } from 'express';
import { discordAuth , discordCallback, getMe} from './controller';

const router = Router();

router.get('/auth/discord', discordAuth);
router.get('/auth/discord/callback', discordCallback);
router.get('/auth/me', getMe);
router.post('/auth/logout', (req, res, next) => {
    req.logout(function(err) {
        if (err) { return next(err); }
        req.session.destroy(function(err) {
          if (err) { return next(err); }
          res.clearCookie('connect.sid', { path: '/'}).status(200).redirect('/');;
        });
        res.redirect('/');
      });

});
export default router;
