import { add, subtract } from './simpleMath'

describe('add', () => {
  test('1 + 1 should be equal to 2', () => {
    expect(add(1, 1)).toBe(2)
  })
  test('2 + 2 should be equal to 4', () => {
    expect(add(2, 2)).toBe(4)
  })
})

describe('subtract', () => {
  test('5 - 2 should be equal to 3', () => {
    expect(subtract(5, 2)).toBe(3)
  })
  test('10 - 1 should be equal to 9', () => {
    expect(subtract(10, 1)).toBe(9)
  })
})
