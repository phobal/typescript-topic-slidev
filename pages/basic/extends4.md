---
layout: 'center'
---

# 泛型类型中的 extends

考虑如下 Demo 类型定义:

```ts
type Demo<T, U> = T extends U ? never : T;
```

因为 `'a' | 'b' | 'c' extends 'a'` 是 false, 所以 `Demo<'a' | 'b' | 'c', 'a'>` 结果是 `'a' | 'b' | 'c'` 么?

查阅[官网](https://www.typescriptlang.org/docs/handbook/2/conditional-types.html)，其中有提到:

> When conditional types act on a generic type, they become distributive when given a union type.

即当条件类型作用于泛型类型时，它们在给定联合类型时成为分配类型。用 JavaScript 来表达 `'a' | 'b' | 'c' extends 'a'` 的结果类似于:

```js
function Demo(T, U) {
  return T.map((val) => {
    if (val !== U) return val;
    return "never";
  });
}

Demo(["a", "b", "c"], "a"); // ['never', 'b', 'c']
```