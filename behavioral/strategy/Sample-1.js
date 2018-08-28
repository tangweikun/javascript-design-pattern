// 策略类
const strategies = {
  S: function(salary) {
    return salary * 4
  },
  A: function(salary) {
    return salary * 3
  },
  B: function(salary) {
    return salary * 2
  },
}

// 环境类
const calculateBonus = function(level, salary) {
  return strategies[level](salary)
}

console.log(calculateBonus('S', 20000)) // 输 出： 80000
console.log(calculateBonus('A', 10000)) // 输 出： 30000
console.log(calculateBonus('B', 8000)) // 输 出： 16000
