class Calculator{
  constructor (previousInputAndOut, currentInputAndOut){
      this.previousInputAndOut = previousInputAndOut
      this.currentInputAndOut = currentInputAndOut
      this.clear()
  }
  clear(){
   this.currentOperand = ''
   this.previousOperand = ''
   this.operator = undefined   
  }
chooseOperation(operation) {
      if(this.currentOperand === '')return
      if(this.previousOperand !== ''){
          this.compute()
      }
      this.operation = operation
      this.previousOperand = this.currentOperand
      this.currentOperand = ''
  }
  compute(){
     let computation
     const prev = parseFloat(this.previousOperand)
     const current = parseFloat(this.currentOperand) 
     if (isNaN(prev) || isNaN(current))return
     switch(this.operation){
         case '+':
         computation = prev + current
         break
         case '-':
         computation = prev - current
         break
         case '/':
         computation = prev / current
         break
         case '*':
         computation = prev * current
         break
         default:
         return
     }
     this.currentOperand = computation
     this.operation = undefined
     this.previousOperand = ''
  }
  appendNumber(unit){
      if(unit === '.' && this.currentOperand.includes('.'))return
      this.currentOperand += unit
  }
  updateDisplay(){
      this.currentInputAndOut.innerText = this.currentOperand
      this.previousInputAndOut.innerText = this.previousOperand
  }
  
  
  
  
}







const numbersBtn = document.querySelectorAll('.numbers')
const displayOutputAndInput = document.getElementById('screen-display')
const previousInputAndOut = document.querySelector('.previous-operand')
const currentInputAndOut = document.querySelector('.current-operand')
const operatorBtn = document.querySelectorAll('.operator')
const equalsBtn = document.querySelector('.equals')
const clearBtn = document.getElementById('clear')


const calculator = new Calculator(previousInputAndOut, currentInputAndOut)
console.log(calculator)

numbersBtn.forEach((number)=>{
  number.addEventListener('click', ()=>{
     calculator.appendNumber(number.innerText)
     calculator.updateDisplay()
  })
})

operatorBtn.forEach((operator)=>{
  operator.addEventListener('click', ()=>{
     calculator.chooseOperation(operator.innerText)
     calculator.updateDisplay()
  })
})

equalsBtn.addEventListener('click', (button)=>{
  calculator.compute()
  calculator.updateDisplay()
})
clearBtn.addEventListener('click', (button)=>{
  calculator.clear()
  calculator.updateDisplay()
})