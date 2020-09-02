import { IController } from '../shared/IController';
import express from 'express';

export class HelloController implements IController { 
  path = '/hello'
  router = express.Router();

  constructor() { 
    this.initRouter();
  }
  private initRouter(): void { 
    this.router.get(`${this.path}/hai`,this.hai);
  }

  private hai = (req: express.Request, res: express.Response) => { 
    return res.json('Hai');
  }
}