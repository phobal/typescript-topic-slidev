---
layout: 'center'
---

TS 类型 Merge:

```ts
/**
 * 限制 F， S 都为 object
 * 遍历 F & S 的 key
 * 先判断 K 是否是 S 的 key
 * 再判断 K 是否是 F 的 key
 */
type Merge<F extends object, S extends object> = {
  [K in keyof (F & S)]: K extends keyof S
    ? S[K]
    : K extends keyof F
    ? F[K]
    : never;
};

// 测试
type Foo = {
  a: number;
  b: string;
};
type Bar = {
  b: number;
  c: boolean;
};

// 结果：{ a: number; b: number; c: boolean}
type mergeFB = Merge<Foo, Bar>;
```