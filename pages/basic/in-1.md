---
layout: 'center'
---

# in

`in`操作符的右侧通常跟一个联合类型，可以使用`in`来迭代这个联合类型，如下：

```ts
in 'name' | 'age' | 'sex'
'name' // 第一次迭代结果
'age'  // 第二次迭代结果
'sex'  // 第三次迭代结果
```
