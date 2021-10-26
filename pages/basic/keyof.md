---
layout: 'center'
---

# keyof

在 TS 中 keyof T 表示获取类型 T 中所有的属性值，这些属性值组合成一个联合类型，例如：

```ts {6}
type Person = {
  name: string;
  age: number;
};
// 'name' | 'age'
type result = keyof Person;
```

`TS`中的`keyof T`，它有点类似`JavaScript`中的`Object.keys()`，它们的共同点都是获取属性键的集合，只不过`keyof T`得到的结果是一个联合类型，而`Object.keys()`得到的是一个数组。
