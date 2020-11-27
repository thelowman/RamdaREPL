const data = [
  { name: 'fred', age: 30, hair: 'black' },
  { name: 'wilma', age: 28, hair: 'red' },
  { name: 'barney', age: 29, hair: 'blonde' },
  { name: 'betty', age: 26, hair: 'black' }
]
const partA = curry((acc, {name}) => ({
  ...acc,
  names: [...(acc.names) || [], name]
}))
const partB = curry((acc, {age}) => ({
  ...acc,
  ages: [...(acc.ages || []), age]
}))
const partC = curry((acc, {hair}) => ({
  ...acc, 
  hairColors: [...(acc.hairColors || []), hair]
}))

const recompose = (...fns) => (a, b) => 
  fns.reduce ((v, fn) => fn (v, b), a)

reduce (recompose (partA, partB, partC), {}, data)
// https://stackoverflow.com/questions/65014257/how-can-i-combine-multiple-reducers-in-ramda
