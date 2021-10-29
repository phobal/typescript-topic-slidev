---
layout: 'center'
---

# in

### 类型守卫

``` ts
type Dog {
  wang: string;
}
type Cat {
  miao: string;
}

const getName = (animal: Dog | Cat) => {
  if ('wang' in animal) { // ok
    return animal.wang; // ok
  } else if ('miao' in animal) { // ok
    return animal.miao; // ok
  }
}

```

