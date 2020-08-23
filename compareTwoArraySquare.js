//same as ([1,2,3], [4,1,9])
// 1 , 2 ,3 , 4,1,9
function same(arr1,arr2){
    if(!(Array.isArray(arr1) && Array.isArray(arr2)) || (arr1.length !== arr2.length)){
     throw new Error('Invalid arguments passed');
    }
    let frequencyOfirstArray = frequencyOf(arr1);
    let frequencyOfSecondArray = frequencyOf(arr2);
    const keyOfFreqSecond = Object.keys(frequencyOfSecondArray);
    const isSquareOfFirst = Object.keys(frequencyOfirstArray).reduce((key, index) => {
        return frequencyOfirstArray[key] === frequencyOfSecondArray[key * key];
         
    },false);
  return isSquareOfFirst;

}

function frequencyOf(arr){
   if(!Array.isArray(arr)){
     throw new Error('Arguments passed are not arrays');
    }
    return Array.from(arr).reduce((frequency,value) => {
         frequency[value] = (frequency[value] || 0) + 1;
         return frequency;
    }, {});
}

console.log(same([1,2,3,2],[4,1,9,4]));