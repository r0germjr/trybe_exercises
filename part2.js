const fatorial = (number) => {
  let result = 1;
  for(index = 1; index <= number; index +=1) {
    result = result * index;
  }
  console.log(result);
};

fatorial(4);