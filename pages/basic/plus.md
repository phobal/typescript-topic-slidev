---
layout: 'center'
---

# 加减号

```ts
type Requied<T> = {
  [P in keyof T]-?: T[P];
};

type Person = {
  name: string;
  age?: number;
};

// 结果：{ name: string; age: number; }
type result = Required<Person>;
```

`-?`是去掉类型中属性后面的`?`，整个`Required`的实际效果是去掉`T`类型中所有属性键后面的`?`，让所有属性变成必填的