---
layout: 'center'
---

# 方式二, 单独定义 type

``` ts
type Add = (a: number, b: number) => number

const add: Add = (a, b) => a + b;

```