---
layout: 'center'
---

# 函数中的 this

``` ts
class Container {
  private val: number;
  constructor(val: number) {
    this.val = val;
  }
  map(cb: (x: number) => number): this {
    this.val = cb(this.val);
    return this;
  }
  log(): this {
    console.log(this.val);
    return this;
  }
}
const instance = new Container(1)
  .map((x) => x + 1)
  .log() // => 2
  .map((x) => x * 3)
  .log(); // => 6
```

refs:  
* 12 - Chainable Options
* 6 - Simple Vue