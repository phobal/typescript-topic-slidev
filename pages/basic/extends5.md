---
layout: 'center'
---

# 逃离舱

如果想让 `Demo<'a' | 'b' | 'c', 'a'>` 的结果为 `'a' | 'b' | 'c'` 是否可以实现呢? 根据[官网](https://www.typescriptlang.org/docs/handbook/2/conditional-types.html#distributive-conditional-types)描述:

> Typically, distributivity is the desired behavior. To avoid that behavior, you can surround each side of the extends keyword with square brackets.

如果不想遍历泛型中的每一个类型，可以用方括号将 extends 关键字的每一侧括起来。

```ts
type Demo<T, U> = [T] extends [U] ? never : T;

// result 此时类型为 'a' | 'b' | 'c'
type result = Demo<"a" | "b" | "c", "a">;
```

另外一个例子 isNever 判断类型是否是 never, 也用到了逃离舱

```ts
type IsNever<T> = [T] extends [never] ? true : false;
```