var MoneyStack = function(billSize) {
  this.billSize = billSize
  this.next = null
}

MoneyStack.prototype = {
  withdraw: function(amount) {
    var numOfBills = Math.floor(amount / this.billSize)
    if (numOfBills > 0) {
      this._ejectMoney(numOfBills) // Eject the bills
      amount = amount - this.billSize * numOfBills // Shrink the amount by how much money we ejected
    }
    // If there is any money left to withdraw and if we have
    // another stack in the line, pass the request on
    amount > 0 && this.next && this.next.withdraw(amount)
  },

  // set the stack that comes next in the chain
  setNextStack: function(stack) {
    this.next = stack
  },

  // private method that ejects the money
  _ejectMoney: function(numOfBills) {
    console.log(
      numOfBills + ' $' + this.billSize + ' bill(s) has/have been spit out',
    )
  },
}

var ATM = function() {
  // Create the stacks of money
  // We'll show you the implementation for this next
  var stack100 = new MoneyStack(100)
  var stack50 = new MoneyStack(50)
  var stack20 = new MoneyStack(20)
  var stack10 = new MoneyStack(10)
  var stack5 = new MoneyStack(5)
  var stack1 = new MoneyStack(1)

  // Set the hierarchy for the stacks
  stack100.setNextStack(stack50)
  stack50.setNextStack(stack20)
  stack20.setNextStack(stack10)
  stack10.setNextStack(stack5)
  stack5.setNextStack(stack1)

  // Set the top stack as a property
  this.moneyStacks = stack100
}

ATM.prototype.withdraw = function(amount) {
  this.moneyStacks.withdraw(amount)
}

// USAGE
var atm = new ATM()

console.log('===186===')
atm.withdraw(186)
/* outputs:
  1 $100 bill(s) has/have been spit out
  1 $50 bill(s) has/have been spit out
  1 $20 bill(s) has/have been spit out
  1 $10 bill(s) has/have been spit out
  1 $5 bill(s) has/have been spit out
  1 $1 bill(s) has/have been spit out
*/

console.log('===72===')
atm.withdraw(72)
/* outputs:
  1 $50 bill(s) has/have been spit out
  1 $20 bill(s) has/have been spit out
  2 $1 bill(s) has/have been spit out
*/
