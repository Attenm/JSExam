'use strict'

class BasicText{
    constructor(userString){
        this.userString = userString;
    }

    findWord(userWord){
        let characters = [',', '.', ':', ';', '(', ')', '#', '*','"'];
        let modifiedStr = this.userString.toLowerCase();

        characters.forEach(character => {
            modifiedStr = modifiedStr.split(character).join('');
        })

        let modifiedStrArray = modifiedStr.split(' ');

        let counter = 0;

        modifiedStrArray.forEach(word => {
            word.includes(userWord) ? counter++ : counter; 
        });
        return console.log(`Знайдено слів "${userWord}" : ` + counter)
    }
}
let userText = new BasicText('У результаті роботи, скрипта потрібно відобразити кількість разів, які слово зустрічається в тексті');
userText.findWord('скрипт');

class Text extends BasicText{
    constructor(userString){
        super(userString)
    }

    findWords(wordsArray){
        wordsArray.forEach(userWord => {
            this.findWord(userWord);
        });
    }
}

let newUserText = new Text('У результаті роботи, скрипта потрібно відобразити кількість разів, які слово зустрічається в тексті');
newUserText.findWords(['слово', 'результат']);