//sumZero([-3,-2,-1,0,1,2,3]) // [-3,3]
function sumZero(arr){
  const startPointer = 0;
  const endPointer = arr.length;
  for(let i=0; i < arr.length; i++){
     const sum = arr[startPointer] + arr[endPointer];
     if(sum === 0){
       return [arr[startPointer], arr[endPointer]];
     }
     else if(sum > 0){
       arr[endPointer] -=  1;
     } else {
       arr[startPointer] += 1;
     }
  }
}

console.log(sumZero([-3,-2,-1,0,1,2,3]));
