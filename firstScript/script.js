'use strict'

class Text{
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
let userText = new Text('У результаті роботи, скрипта потрібно відобразити кількість разів, які слово зустрічається в тексті');
userText.findWord('скрипт');

