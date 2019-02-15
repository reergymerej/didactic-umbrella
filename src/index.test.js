import combos, { simple } from '.'

fdescribe('simple', () => {
  it('should be simple', () => {
    expect(simple([], 1, ['a', 'b'])).toEqual([
      [1, 'a'],
      [1, 'b'],
    ])

    expect(simple([], 1, ['a', 'b', 'c'])).toEqual([
      [1, 'a'],
      [1, 'b'],
      [1, 'c'],
    ])
  })

  it('should be recursive', () => {
    expect(simple([], 1, ['a'], ['A', 'B'])).toEqual([
      [1, 'a', 'A'],
      [1, 'a', 'B'],
    ])

    expect(simple([], 1, ['a', 'b'], ['A', 'B'])).toEqual([
      [1, 'a', 'A'],
      [1, 'a', 'B'],
      [1, 'b', 'A'],
      [1, 'b', 'B'],
    ])

    expect(simple([], 1, ['a', 'b'], ['A', 'B'], ['x', 'y'])).toEqual([
      [1, 'a', 'A', 'x'],
      [1, 'a', 'A', 'y'],
      [1, 'a', 'B', 'x'],
      [1, 'a', 'B', 'y'],
      [1, 'b', 'A', 'x'],
      [1, 'b', 'A', 'y'],
      [1, 'b', 'B', 'x'],
      [1, 'b', 'B', 'y'],
    ])
  })
})
