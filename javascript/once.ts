type Fn<T> = (this: any, args: Array<any>) => T;

export default function once<T>(func: Fn<T>): Fn<T> {
  let called: boolean = false;
  let result: T | null = null;
  
  function _wrapper(this: any, args: Array<any>): T {
    const context = this;
    if (!called) {
      result = func.call(context, args);
      called = true;
    }
     
    return result as T;
  }

  return _wrapper;
}
