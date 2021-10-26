---
layout: 'center'
---

# infer


`infer`关键词的作用是延时推导，它会在类型未推导时进行占位，等到真正推导成功后，它能准确的返回正确的类型。

```ts
type ReturnType<T> = T extends (...args: any) => infer R ? R : never;

const add = (a: number, b: number): number => {
  return a + b;
};
// 结果: number
type result = ReturnType<typeof add>;
```