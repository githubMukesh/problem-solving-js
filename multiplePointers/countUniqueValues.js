// countUniqueValues([1,1,1,2,3,4,5])
function countUniqueValues(arr){
  if(!Array.isArray(arr)) {
    throw new Error('Invalid Arguments');
  }
  let count = 0;
  let i = 0;
  for(let j=1; i < arr.length ; j++){
    if(arr[i] !== arr[j]){
      arr[i] = arr[j];
      count += 1;
    } 
  }
  return count;
}
countUniqueValues('');