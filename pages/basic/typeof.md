---
layout: 'center'
---

# typeof

`TS`中的`typeof`，可以用来获取一个`JavaScript`变量的类型，通常用于获取一个对象或者一个函数的类型，如下：

```ts
const add = (a: number, b: number): number => {
  return a + b;
};
const obj = {
  name: "AAA",
  age: 23,
};

// 结果：(a: number, b:number) => number
type t1 = typeof add;
// 结果：{ name: string; age: number; }
type t2 = typeof obj;
```
