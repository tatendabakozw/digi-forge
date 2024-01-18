/* eslint-disable @typescript-eslint/no-explicit-any */
import { User } from '@models/User';

export const githubAuthController = async (req, res, next) => {
  try {
    // Store user information in session or database
    const profile: any = req.user;
    // console.log('profile - ', profile);
    const _user = await User.findOne({ githubId: profile.id });
    console.log(_user)
    if (!_user) {
      const newUser = new User({
        username: profile.username,
        photoURL: profile.photos[0].value,
        authMethod: profile.provider,
        githubInfo: profile._json,
        githubId: profile.id
      });
      await newUser.save();
    }
    // res.headers()
    return res.status(200).redirect(`http://localhost:4201/new/static-site`);
  } catch (error) {
    next(error);
  }
};
