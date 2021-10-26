---
layout: 'center'
---

# 交叉类型(Intersection Type)

而交叉类型则适用于对象的"合并"，它使用 `&` 符号进行连接，如下：

```ts
type result = T & U;
```

`T & U` 表示一个新的类型，其中这个类型包含 `T` 和 `U` 中所有的键，这和 `JavaScript` 中的 `Object.assign()` 函数的作用非常类似。