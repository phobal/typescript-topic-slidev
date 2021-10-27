---
layout: 'center'
---

# 方式三, 通过接口定义

``` ts

interface Entity {
    add: (a: number, b: number) => number;
    del(a: number, b: number): number;
}
const entity: Entity = {
    add: (a, b) => a + b,
    del(a, b) {
      return a - b;
    },
};

```