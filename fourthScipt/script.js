'use strict'

class Numbers{
    constructor(){
        this.firstArray = [1, 3, 3, 7];
        this.secondArray = [1, 5, 8, 4];
        this.thirdArray = [1, 3, 6, 9];
        this.fourthArray = [1, 4, 2, 2];
        this.fifthArray = [];
    }

    compare(a,b){
        if(a < b){
            return -1;
        } else if (a > b){
            return 1;
        } else {
            return 0;
        }
    }

    collectNumbersInArray(){
        let array = [];
        array.push(this.firstArray, this.secondArray, this.thirdArray, this.fourthArray);
        return array;
    }

    sortCollectedNumbers(){
        this.fifthArray = this.collectNumbersInArray().flat().sort(this.compare);
        return this.fifthArray;
    }

    collectUniqueNumbersInArray(){
        let arrayOfNumbers = [];

        this.collectNumbersInArray().forEach(array => {
            let newArray = array.filter((number, index) => {
                return array.indexOf(number) === index;
            });

            arrayOfNumbers.push(newArray);
        })
        this.fifthArray = arrayOfNumbers.flat()
        return this.fifthArray;
    }

    collectSameNumbersInEachArray(){
        let uniqueNumbers = [];
        const allTheNumbers = this.collectNumbersInArray().flat();
        const arraysOfNumbers = this.collectNumbersInArray();

        allTheNumbers.forEach(number => {
            let result = arraysOfNumbers.every(array => {
                return array.includes(number);
            })

            if (result && !uniqueNumbers.includes(number)) {
                uniqueNumbers.push(number)
            }
        })
        return uniqueNumbers;
    }

    collectPrimeNumbers(){
        let array = this.collectNumbersInArray().flat().filter(number => {
            if(number <= 1){
                return false;
            }

            for (let i = 2; i < number; i++){
                if(number % i === 0) {
                    return false;
                }

            }
            return true;
        })

        array = array.filter((number, index) => {
            return array.indexOf(number) === index;
        })
        return array;
    }
}

let numbers = new Numbers();

console.log(numbers.sortCollectedNumbers());
console.log(numbers.collectUniqueNumbersInArray());
console.log(numbers.collectSameNumbersInEachArray());
console.log(numbers.collectPrimeNumbers());

