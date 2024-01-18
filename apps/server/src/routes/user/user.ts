import express from 'express';
const router = express.Router();

// get all user repositories
// get request
// /api/user/repos
router.get('/repos', async (req, res, next) => {
  try {
    const accessToken = 'res.user'
    console.log('get all repository of user from github', accessToken);
    return res.send(accessToken)
  } catch (error) {
    next(error);
  }
});

export default router;
