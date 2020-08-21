function countCharacter(str){
     if(!str) {throw new Error('Null and undefined value are not allowed')};
     return str.split('').reduce((accumulator, value) => {
          value = value.toLowerCase();
          accumulator[value] = (accumulator[value] || 0 ) + 1;
          return accumulator;
     }, {});
}

const result = countCharacter('The number is 897775757');
console.log(result);
