// Parte 2 - exercícios

const lesson1 = {
  materia: 'Matemática',
  numeroEstudantes: 20,
  professor: 'Maria Clara',
  turno: 'manhã',
};

const lesson2 = {
  materia: 'História',
  numeroEstudantes: 20,
  professor: 'Carlos',
};

const lesson3 = {
  materia: 'Matemática',
  numeroEstudantes: 10,
  professor: 'Maria Clara',
  turno: 'noite',
};

// Crie uma função para adicionar o turno da manhã na lesson2 . Essa função deve possuir três parâmetros, 
// sendo eles: o objeto a ser modificado, a chave que deverá ser adicionada e o valor dela.

const newKey = (object, key, value) => {
  object[key] = value;
};

newKey(lesson2, 'turno', 'manhã');
console.log(lesson2);

// Crie uma função para listar as keys de um objeto. Essa função deve receber um objeto como parâmetro.
const logKeys = (object) => Object.keys(object);
console.log(logKeys(lesson3));

// Crie uma função para mostrar o tamanho de um objeto.
const objLength = (object) => console.log(Object.keys(object).length);

// Crie uma função para listar os valores de um objeto. Essa função deve receber um objeto como parâmetro.

const valuesLog = (object) => console.log(Object.values(object));
valuesLog(lesson3);
