import express from 'express';
import * as jwt from 'jsonwebtoken';
const KEY = 'TOKEN_MOKLET'
////eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjoiYXJpZUBtb2tsZXQuY29tIiwiaWQiOiIwMDEifQ.OhcGNq-WgIh2sFFEgBCF3MdpjK5CVf0QGkazTyv9YUM
export default async function tokenized(
  req: express.Request,
  res: express.Response,
  next: express.NextFunction) { 
  const token = req.headers['x-moklet-token'] as string;
  if (token) {
    jwt.verify(token, KEY, (_err: any, _result: any) => { 
      if (_err) { 
        return unauthorized(res);
      }
      req.api = _result;
      next();
      /// req.api.user
      ///req.api.data;
    })
  } else { 
    ///should be unauthorized
  }
}
function unauthorized(res: express.Response) { 
  return res.status(401).json({ 'message': 'not Anauthorized, token missing or invalid', 'status': 401 })
}