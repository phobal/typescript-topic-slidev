type AnyType = boolean;
type AnyReturnType = string;
type AnyNextType = number;

function *gen(): Generator<AnyType, AnyReturnType, AnyNextType> {
  const nextValue = yield true; // nextValue 类型是 number，yield 后必须是 boolean 类型
  return `${nextValue}`; // 必须返回 string 类型
}