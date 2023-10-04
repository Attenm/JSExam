'use strict'

class stringExpression{
    constructor(userstring){
        this.userstring = userstring;
    }

    solveExpression(){
        let currentNumber = 0;
        let currentOperator = '+';
        let result = 0;
        for (let i = 0; i <= this.userstring.length; i++){
            let symbol = this.userstring[i];

            if(!isNaN(parseInt(symbol))){
                currentNumber += symbol; 
            } else {
                let num = parseInt(currentNumber);

                switch(currentOperator){
                    case '+':
                        result += num;
                        break;
                    case '-':
                        result -= num;
                        break;
                }
                currentNumber = '';
                currentOperator = symbol;
            }
        }
        return result;
    }
}

let expression = new stringExpression('2+3-7');
console.log(expression.solveExpression());