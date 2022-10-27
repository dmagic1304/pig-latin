function getInput() {
  const inputString = document
}

function pigLatin(text) {
  const inputArray = text.split(' ');
  const vowels = ['a', 'e', 'i', 'o', 'u'];
  const outputArray = [];

  for(let i = 0; i < inputArray.length; i++) {
    if(vowels.includes(inputArray[i].charAt(0))) {
      let newWord = inputArray[i] + 'way';
      outputArray.push(newWord);
      console.log('first condition triggered: ' + (outputArray));
    }
  }
  
  for(let i = 0; i < inputArray.length; i++) {
  if(!vowels.includes(inputArray[i].charAt(0))) {
      let markedWord = inputArray[i];
        for(let i = 0; i < markedWord.length; i++);
          if(!vowels.includes(markedWord.charAt(i))) {
            let newWord = '';
            newWord += markedWord.charAt(i);
            console.log('test of second condition: ' + (newWord));
          }     
    }
  }
}



window.addEventListener('load', function(){

})