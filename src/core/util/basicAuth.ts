import express from 'express';

export default async function basicAuth (
  req: express.Request,
  res: express.Response,
  next: express.NextFunction) {

  if (!req.headers.authorization || req.headers.authorization.indexOf('Basic ') === -1) {
    return res.status(401).json({ 'message': 'Anauthorized', 'status': 401 })
  }
  const base64Credentials = req.headers.authorization.split(' ')[1];
  const credentials = Buffer.from(base64Credentials, 'base64').toString();
  const [username, password] = credentials.split(':');
  const user: boolean = credentialCheck(username, password);
  if (!user) { 
    return res.status(401).json({ 'message': 'Anauthorized', 'status': 401 })
  }
  next();

}

function credentialCheck(username: string, password: string): boolean { 
  if (username !== 'moklet_username') { 
    return false
  } 
  if (password !== 'moklet_password') { 
    return false
  } 
  return true;
}