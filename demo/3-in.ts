type Dog = {
  wang: string;
  voice?: 'wang';
}
type Cat = {
  miao: string;
  voice?: 'miao'
}
/**
 * 实现
 */
const getName = (animal: Dog | Cat) => {
  if ('wang' in animal) {
    return animal.voice
  } else if ('miao' in animal) {
    return animal.voice
  }
}

// const voice = getName({ miao: 'wang'})