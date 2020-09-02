import express from 'express';

export class Kernel { 
  
  _defaultApps: express.Application;
  
  constructor() { 
    this._defaultApps = express();
  }

  appService() { 
    this._defaultApps.listen(4000, () => { 
      console.log(`aplikasi ini berjalan di port ${4000}`);
    })
  }
  
}