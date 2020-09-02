import { HelloWorker } from './HelloWorker';
interface IAppWorker { 
  ping(): string;
}

export class AppWorker implements IAppWorker {
  _hello:HelloWorker
  
  constructor() { 
    this._hello = new HelloWorker();
  }
  ping(): string {
    return this._hello.hello() as string;
  } 

}