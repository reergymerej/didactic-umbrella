export const simple = (acc = [], head, variations, ...rest) => {
  if (rest.length) {
    variations.forEach(variation => {
      const restCombos = simple([], variation, ...rest)
      restCombos.forEach(combo => {
        acc.push([head, ...combo])
      })
    })
    return acc
  } else {
    variations.map(x => {
      acc.push(
        [head, x]
      )
    })
  }
  return acc
}
