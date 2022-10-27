function getInput() {
  const inputString = document
}

function pigLatin(text) {
  const inputArray = text.split(' ');
  const vowels = ['a', 'e', 'i', 'o', 'u'];
  const outputArray = [];

  for(let i = 0; i < inputArray.length; i++) {
    if(vowels.includes(inputArray[i].charAt(0))) {
      console.log('test');
      let newWord = inputArray[i] + 'way';
      outputArray.push(newWord);
    } else {
      outputArray.push(inputArray[i]);
    }
    console.log(outputArray);
  }
}



window.addEventListener('load', function(){

})