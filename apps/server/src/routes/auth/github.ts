import express from 'express';
const router = express();
import passport from '@config/passport';
import { githubAuthController } from '@controllers/auth-controllers/githubAuthController';

// github auth route
// get request
// /auth/github
router.get(
  '/github',
  passport.authenticate('github', { scope: ['user:email'], session: false })
);

// github callback
// get request
// /auth/github/caallback
router.get(
  '/github/callback',
  passport.authenticate('github', { failureRedirect: '/' }),
  githubAuthController
);

export default router;
