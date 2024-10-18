import { Request, Response } from 'express';
import passport, { use } from 'passport';
import { Strategy } from 'passport-discord';
import { prisma } from '../../database/database';
import {
  DISCORD_CLIENT_ID,
  DISCORD_CLIENT_SECRET,
  DISCORD_REDIRECT_URI,
} from '../../config/config';

// Serialize and deserialize user
passport.serializeUser((user: any, done) => {
  done(null, user);
});

passport.deserializeUser((user: any, done) => {
  console.log({ user });
  done(null, user);
});

// Discord OAuth strategy
passport.use(
  new Strategy(
    {
      clientID: `${DISCORD_CLIENT_ID}`,
      clientSecret: `${DISCORD_CLIENT_SECRET}`,
      callbackURL: `${DISCORD_REDIRECT_URI}`,
      scope: ['email'],
    },
    async (accessToken: string, refreshToken: string, profile, done) => {
      // console.log({
      //   accessToken,
      //   refreshToken,
      //   profile,
      // });

      try {
        const userExists = await prisma.user.findUnique({
          where: {
            email: profile.email,
          },
        });

        if (!userExists) {
          await prisma.user.create({
            data: {
              email: profile.email,
              password: accessToken,
            },
          });
        }
        // console.log({ profile });
        return done(null, profile);
      } catch (error) {
        console.log('error in passport discord strategy');
        return done(error, undefined);
      }
    },
  ),
);

// Authentication initiation (e.g., a route to start the Discord auth flow)
export const discordAuth = (req: Request, res: Response, next: any) => {
  console.log('Discord Auth callback');
  passport.authenticate('discord')(req, res, next);
};

// Discord OAuth callback and sending user as JSON response
export const discordCallback = (req: Request, res: Response, next: any) => {
  passport.authenticate(
    'discord',
    { failureRedirect: '/error' },
    (err, user, info) => {
      if (err) {
        return next(err);
      }
      if (!user) {
        return res.redirect('/error');
      }

      req.logIn(user, (loginErr) => {
        if (loginErr) {
          console.log('Login error:', loginErr);
          return next(loginErr);
        }
        console.log('Authentication successful');

        const userData = {
          id: user.id,
          username: user.username,
          email: user.email,
        };

        const queryParams = new URLSearchParams(userData).toString();

        // res.redirect(`http://localhost:5173/auth-callback?${queryParams}`);
        // res.cookie('user', JSON.stringify(userData));

        // console.log(req.session);
        // console.log(req.cookies);
        res.cookie('user', JSON.stringify({ email: user.email }));
        // res.json(userData);
        res.redirect(`http://localhost:5173/tasks`);
      });
    },
  )(req, res, next);
};

export const getMe = (req: Request, res: Response) => {
  console.log('user get me');
  if (!req.isAuthenticated()) {
    return res.status(401).json({ error: 'Unauthorized', user: null });
  }
  console.log({ user: req.user });
  res.json(req.user);
};
