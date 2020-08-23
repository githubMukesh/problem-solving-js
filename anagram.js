// anagram
 function validAnagram(arr1,arr2){
    if((arr1.length !== arr2.length)){
     throw new Error('Invalid arguments passed');
    }
    let frequencyOfirstArray = frequencyOf(arr1);
    let frequencyOfSecondArray = frequencyOf(arr2);
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

console.log(validAnagram('wzza','zzwa'));
