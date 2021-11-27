import { AuthenticationError } from './../core/errors';
import { User } from '../models/User';
import { Request, Response, NextFunction, RequestHandler } from "express";

type AccountCBFunc = (account: User) => void

function getAccount (req: Request, res: Response, callback: AccountCBFunc) {
  const account = req.user as User;

  if (!account) {
    throw new AuthenticationError("Authentication failed");
  }

  callback(account);
}

export const LoginAccess: RequestHandler = function (req, res, next) {

  getAccount(req, res, function (account) {
      next();
  });
};