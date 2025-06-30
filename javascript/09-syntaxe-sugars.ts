const numberInString = '1234'

// example of syntax sugar
const number = +numberInString // avoid this syntax

// use this syntaxe instead
const number2 = Number(numberInString) 
const isNumberNotNull = Boolean(numberInString)
const numberAsString = String(numberInString)