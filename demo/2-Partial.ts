
/**
 * 实现 Partial
 */
type MyPartial<T> = any

type Person2 = {
  name?: string;
  age: number;
}

type result2 = MyPartial<Person2> // { name: string; age: number }