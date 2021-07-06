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

// Usando o objeto criado no exercício 5, crie uma função que retorne o número total de estudantes em todas as aulas.

const allLessons = Object.assign({}, {lesson1, lesson2, lesson3});
console.log(allLessons);

const getStudentsTotal = (lessons) => {
  const keys = Object.keys(lessons);
  let totalStudants = 0;
  for(index = 0; index < keys.length; index +=1) {
    const currentKey = keys[index];
    totalStudants += lessons[currentKey].numeroEstudantes;
  }
  return totalStudants;
}
console.log(getStudentsTotal(allLessons));