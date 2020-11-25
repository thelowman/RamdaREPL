const data = [
  { name: 'fred', age: 30, hair: 'black' },
  { name: 'wilma', age: 28, hair: 'red' },
  { name: 'barney', age: 29, hair: 'blonde' },
  { name: 'betty', age: 26, hair: 'black' }
]

const partA = curry((acc, thing) => {
  if (!acc.names) acc.names = [];
  acc.names.push(thing.name);
  return acc;
})
const partB = curry((acc, thing) => {
  if (!acc.ages) acc.ages = [];
  acc.ages.push(thing.age);
  return acc;
})
const partC = curry((acc, thing) => {
  if (!acc.hairColors) acc.hairColors = [];
  acc.hairColors.push(thing.hair);
  return acc;
})

// I want one iteration with all 3 functions

// Iterates multiple times but works
reduce(partC, reduce(partB, reduce(partA, {}, data), data), data)

// Iterates once but isn't very nice
const allThree = (acc, thing) => {
  return partC(partB(partA(acc, thing), thing), thing)
}
reduce(allThree, {}, data)
