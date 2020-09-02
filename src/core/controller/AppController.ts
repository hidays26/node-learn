import { IController } from '../shared/IController';
import express from 'express';
import { AppWorker } from '../worker/AppWorker';

export class AppController implements IController { 
  path = '/app'
  router = express.Router();
  _worker:AppWorker
  constructor() { 
    this._worker =  new AppWorker()
    this.initRouter();
  }

  private initRouter(): void { 
    this.router.get(`${this.path}/ping`, this.ping);
    this.router.get(`${this.path}/foo`,this.foo);
  }

  private foo = (req: express.Request, res: express.Response) => { 
    return res.json('bar');
  }

  private ping = (req: express.Request, res: express.Response) => { 
    return res.json(this._worker.ping());
  }
}