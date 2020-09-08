export { };
export interface ILooseObject {
  [key: string]: any;
}
declare global {

  namespace Express { 
    interface Request { 
      api:ILooseObject
    }
  }
}