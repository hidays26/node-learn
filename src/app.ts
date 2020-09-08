import { Kernel } from "./core/kernel/kernel";
import { IController } from './core/shared/IController';
import basicAuth from "./core/util/basicAuth";

export class App {
  _kernel: Kernel
  
  constructor(_c: IController[]) { 
    this._kernel = new Kernel();
    this.initController(_c);
  }

  private initController(_c: IController[]) { 
    _c.forEach((controller) => { 
      this._kernel._defaultApps.use('/api/v1/', controller.router);
    })
  }

  listen() { 
    this._kernel.appService();
  }
}