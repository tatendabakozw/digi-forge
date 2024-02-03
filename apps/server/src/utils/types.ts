import { Request } from 'express';

export interface CustomRequest extends Request {
  session: {
    gh_access_token?: string;
  };
}
