const fetchPromise = () => {
  const promise = new Promise((resolve, reject) => {
    const numbers = Array.from(
        { length : 10 },
        () => Math.floor(Math.random() * 50) + 1
    );
    const sum = numbers.map((number) => number * number)
                       .reduce((acc, curr) => acc + curr);
    sum < 8000 ? resolve(sum) : reject(sum);
  });
  
  promise
    .then((result) => console.log(`Promise resolvida: ${result}`))
    .catch((result) => console.log(`Promise rejeitada: ${result}`));
};
  
fetchPromise();