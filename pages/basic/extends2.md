---
layout: 'center'
---

# 类型约束

类型约束经常和泛型一起使用

```ts
// 类型约束
U extends keyof T
```

`keyof T`是一个整体，它表示一个联合类型。`U extends Union`这一整段表示`U`的类型被收缩在一个联合类型的范围内。

这样做的实际表现为：第二个参数传递的字符串只能是`T`键名中的一个，传递不存在的键名会报错。

- [04-Pick](https://tsch.js.org/4)