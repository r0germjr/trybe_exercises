//const fatorial = (number) => {
//  let result = 1;
//  for(index = 1; index <= number; index +=1) {
//    result = result * index;
//  }
//  console.log(result);
//};
//
//fatorial(4);

const factorial = (number) => number > 1 ? number * factorial(number - 1) : 1;
console.log(factorial(4)); // solution using ternary operator

const phrase = 'Antônio foi no banheiro e não sabemos o que alconteceu';
const longestWord = (world) => {
  let newWorld = world.split(' ');
  let maxLenght = 0;
  let result = '';

  for (let index = 0; index < newWorld.length; index += 1) {
    if (newWorld[index].length > maxLenght) {
      maxLenght = newWorld[index].length;
      result = newWorld[index];
    }
  }
  return result;
}

console.log(longestWord(phrase));