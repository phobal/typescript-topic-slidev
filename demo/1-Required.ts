
/**
 * 实现 Required
 */
type MyRequired<T> = any

type Person = {
  name?: string;
  age: number;
}

type result = MyRequired<Person> // { name: string; age: number }