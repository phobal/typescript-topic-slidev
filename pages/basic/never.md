---
layout: center
---

# never

`never`类型表示永远不会有值的一种类型。

如果一个函数抛出了一个错误，那么这个函数就可以用`never`来表示其返回值，如下：

```ts
function handlerError(message: string): never {
  throw new Error(message);
}
```

关于`never`的另外一个知识点是：如果一个联合类型中存在`never`，那么实际的联合类型并不会包含`never`，如下：

```ts
// 定义
type test = "name" | "age" | never;

// 实际
type test = "name" | "age";
```

- [尤雨溪对 never 的理解](https://www.zhihu.com/question/354601204)