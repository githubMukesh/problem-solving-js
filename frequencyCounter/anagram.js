// anagram
 function validAnagram(str1,str2){
    if((str1.length !== str2.length)){
     throw new Error('Invalid arguments passed');
    }
    let frequencyOfirstArray = frequencyOf(str1);
    let frequencyOfSecondArray = frequencyOf(str2);
    const keyOfFreqSecond = Object.keys(frequencyOfSecondArray);
    return Object.keys(frequencyOfirstArray).reduce((acc, value) => {
        return frequencyOfirstArray[value] === frequencyOfSecondArray[value];
         
    },false);


}

 function frequencyOf(arr){
    return Array.from(arr).reduce((frequency,value) => {
         frequency[value] = (frequency[value] || 0) + 1;
         return frequency;
    }, {});
}

//console.log(validAnagram('wzza','zzwa'));


// another Solution of anagram

function validAnagramSecond(str1,str2){
 if(str1.length !== str2.length) {
   return false;
 }
 let lookUp = {};
 for(let i=0; i< str1.length; i++){
   const letter = str1[i];
   lookUp[letter] = (lookUp[letter] || 0 ) + 1;
 }
for(let i=0; i< str2.length; i++){
 const letter = str2[i];
 if(!lookUp[letter]) {
   return false;
 } else {
   lookUp[letter] -= 1;
 }
}
return true
}

console.log(validAnagramSecond('wzca','zzwa'));