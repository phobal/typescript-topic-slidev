// 实现 ReturnType, 返回函数的返回值类型
type MyReturnType<T> = any


const add = (a: number, b: number): number => {
  return a + b;
};
// 结果: number
type result6 = MyReturnType<typeof add>;