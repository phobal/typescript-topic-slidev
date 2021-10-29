---
layout: 'center'
---

# in

`TS`中的`in`操作符原理，跟`JavaScript`中的`for in`遍历有点类似。

根据 keyof 和 in 的特点，我们可以写一些辅助工具，比如： Readonly

```ts {1-3}
type Readonly<T> = {
  readonly [P in keyof T]: T[P];
};
type Person = {
  name: string;
  age: number;
};
// 结果：{ readonly name: string; readonly age: number; }
type result = Readonly<Person>;
```
[P in keyof T]：这段代码表示遍历 T 中的每一个属性键，每次遍历时属性键取名为 P ，这和 JavaScript 中的 for in 非常类似：

```ts
// TS 中的迭代
P in keyof T

// JS 中的迭代
for (let key in obj)
```