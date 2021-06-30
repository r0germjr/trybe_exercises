const text = document.getElementById('text');
let clickcount = 0;
document.querySelector('#associated').addEventListener('click', () => text.innerText = clickcount += 1);

const array = ["Android", "iOS", "Architecture", "Teach", "Run"];

const findX = (string) => {
  const stringParameter = `Tryber x aqui`;
  const newString = stringParameter.replace('x', string);
  return newString;
}

const concat = (result) => {
  const string2 = `Minhas 5 principais skills são:`;
  const string3 = `#VQV #goTrybe`;
  const orderedSkills = array.sort();

  return `${result}
  ${string2}
  ${orderedSkills}
  ${string3}`;
}

console.log(concat(findX('Roger')));