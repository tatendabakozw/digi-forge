import express from 'express';
import { CustomRequest } from 'utils/types';
const router = express.Router();

// get all user repositories
// get request
// /api/user/repos
router.get('/repos', async (req: CustomRequest, res, next) => {
  try {
    const accessToken = req.session.gh_access_token;
    console.log('get all repository of user from github', accessToken);
    return res
      .status(200)
      .send({
        accessToken: accessToken,
        message: 'getting all repos was successful',
      });
  } catch (error) {
    next(error);
  }
});

export default router;
