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
  if (typeof animal.wang == 'string') { // ts(2339)
    return animal.wang; // ts(2339)
  } else if (animal.miao) { // ts(2339)
    return animal.miao; // ts(2339)
  }
}

```

