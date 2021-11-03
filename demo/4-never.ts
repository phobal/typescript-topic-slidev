// https://tsch.js.org/268

type If<C, T, F> = any

// type cases = [
//   Expect<Equal<If<true, 'a', 'b'>, 'a'>>,
//   Expect<Equal<If<false, 'a', 2>, 2>>,
// ]

// type error = If<null, 'a', 'b'> // never