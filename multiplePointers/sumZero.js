//sumZero([-3,-2,-1,0,1,2,3]) // [-3,3]
function sumZero(arr){
  const startPointer = 0;
  const endPointer = arr.length - 1 ;
  for(let i=0; i < arr.length; i++){
     const sum = arr[startPointer] + arr[endPointer];
     if(sum === 0){
       return [arr[startPointer], arr[endPointer]];
     }
     else if(sum > 0){
        endPointer -=  1;
     } else {
       startPointer += 1;
     }
  }
}

function sumZeroByJam(arr){
  const startPointer = 0;
  const endPointer = arr.length - 1 ;
  while(startPointer < endPointer){
     const sum = arr[startPointer] + arr[endPointer];
     if(sum === 0){
       return [arr[startPointer], arr[endPointer]];
     }
     else if(sum > 0){
        endPointer -=  1;
     } else {
       startPointer += 1;
     }
  }
}


console.log(sumZeroByJam([-3,-2,-1,0,1,2]));
