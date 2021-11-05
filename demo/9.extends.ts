
/** 类型约束 */
type MyPick<T, K extends keyof T> = {
  [P in K]: T[P];
};

/** 条件约束 */
type Demo<T, U> = T extends U ? never : T;

type demo = Demo<'a' | 'b' | 'c', 'a'>