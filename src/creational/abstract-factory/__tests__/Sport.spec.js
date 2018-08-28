import { BasketBall, WeightLifting, Running } from '../Sport'

test('Sport', () => {
  const basketBall = new BasketBall('篮球')
  expect(basketBall.type).toBe('ball')
  expect(basketBall.play()).toBe('我在玩篮球')
})

test('Sport', () => {
  const weightLifting = new WeightLifting('举重')
  expect(weightLifting.type).toBe('power')
  expect(weightLifting.play()).toBe('我在玩举重')
})

test('Sport', () => {
  const running = new Running('跑步')
  expect(running.type).toBe('speed')
  expect(running.play()).toBe('我在玩跑步')
})
