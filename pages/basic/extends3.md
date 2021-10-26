---
layout: 'center'
---

# 条件约束

当 extends 用于表示条件判断时，可以总结出以下规律

1. 同一类型的子类型在使用 extends 时，extends 语义可解释为等于。

```ts
type result1 = "a" extends "abc" ? true : false; // false
type result2 = 123 extends 1 ? true : false; // false
```

2. `狭窄类型 extends 宽泛类型`且`宽泛类型中包含狭窄类型`时结果为 true，反之为 false。

```ts
type result3 = string extends string | number ? true : false; // true
```

3. 当 extends 作用于对象时，若在对象中指定的 key 越多，则其类型定义的范围越狭窄，可以参考如下例子。

```ts
type result4 = { a: true; b: false } extends { a: true } ? true : false; // true
```