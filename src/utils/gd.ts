export const gd = <T>(o: T | Array<T>): Array<T> =>
  Array.isArray(o) ? o : [o];
