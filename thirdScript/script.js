'use strict'

class Text{
    constructor(userText){
        this.userText = userText;
    }

    capitalize(userWord){
        let modUserWord = userWord.split('');
        modUserWord[0] = modUserWord[0].toUpperCase();
        modUserWord = modUserWord.join('');
        return modUserWord;
    }

    changeWords(finder, changer){
        let modifiedTextArray = this.userText.toLowerCase().split(' ');

        modifiedTextArray.forEach((word, index)=> {
            for (let i = 0; i <= finder.length - 1; i++){
                if(word === finder[i]){
                    modifiedTextArray[index] = this.capitalize(changer[i]);
                }
            }
        })

        this.userText = modifiedTextArray.join(' ');

        let string = '';

        changer.forEach((changerWord, index) => {
            let wordsArray = modifiedTextArray.filter(word => word.toLowerCase() === changerWord);
            string += `${this.capitalize(finder[index])}/${this.capitalize(changerWord)} - ${wordsArray.length} `;
        })
        return console.log(string);
    }
}

let text = new Text('Cat runs. Dog runs. Cat jumps');
text.changeWords(['cat', 'dog'], ['bird', 'fish']);
console.log(text.userText);

