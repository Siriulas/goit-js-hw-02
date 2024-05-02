const start = 6;
const end = 17;
let number;
function findNumber(start, end) {
  for (let index = start; index < end; index++) {
    if (index % 5 === 0 ) {
      number = index;
      break;
      
    }
    
    }
    console.log(number);
  return number;
}
