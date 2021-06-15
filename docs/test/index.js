const union = (setA, setB) => {
  const unionAb = new Set()
  setA.forEach(value => unionAb.add(value))
  setB.forEach(value => unionAb.add(value))
  return unionAb
}

const intersection = (setA, setB) => {
  const intersectionSet = new Set()
  setA.forEach(value => {
    if (setB.has(value)) {
      intersectionSet.add(value)
    }
  })
  return intersectionSet
}

const difference = (setA, setB) => {
  const differenceSet = new Set()
  setA.forEach(value => {
    if (!setB.has(value)) {
      differenceSet.add(value)
    }
  })
  return differenceSet
}
