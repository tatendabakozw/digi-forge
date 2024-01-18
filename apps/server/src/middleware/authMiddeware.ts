/**
 * @notice - functions give permissions to users with certain roles
 * @param {token} req - token from the client
 * @returns user object with id
 */
export const requireUserSignIn = (req, res, next) => {
  if (req.isAuthenticated()) {
    next();
  } else {
    return res.status(500).send({ message: 'Not allowed to perfom such task' });
  }
};
