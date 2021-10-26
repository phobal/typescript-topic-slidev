---
layout: 'center'
---

# 联合类型(Unoin Type)

联合类型一般适用于基本类型的"合并"，它使用`|`符号进行连接，如下：

```ts
type result = "name" | 1 | true | null;
```