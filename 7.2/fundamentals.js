//Parte I - Crie uma função que receba três parâmetros, sendo eles: um objeto, o nome de uma chave e o seu valor. 
//O retorno dessa função deve ser o objeto já com a nova chave adicionada nele.

const customer = {
  firstName: 'Roberto',
  lastName: 'Faria', // Propriedade adicionada.
  age: 22,
  job: 'Teacher',
};

const newProperty = (object, key, value) =>  object[key] = value;
newProperty(customer, 'city', 'Golden Coast');
//console.log(customer);

// Object.keys
//Parte 2 - Tente criar uma função que exiba as habilidades do objeto student.

const student1 = {
  Html: 'Muito Bom',
  Css: 'Bom',
  JavaScript: 'Ótimo',
  SoftSkills: 'Ótimo',
};

const student2 = {
  Html: 'Bom',
  Css: 'Ótimo',
  JavaScript: 'Ruim',
  SoftSkills: 'Ótimo',
  Git: 'Bom', // chave adicionada
};

const listOfSkills = (student) => {
  const arrayOfSkills = Object.keys(student);
  const valuesSkills = Object.values(student);
  for (index = 0; index < arrayOfSkills.length; index += 1) {
    console.log(`${arrayOfSkills[index]}, Nível: ${valuesSkills[index]}`);
  }
  
}

//console.log(`Estudante 1`);
//listOfSkills(student2);

//Parte 3 - Obejct.values
//O Object.values segue a mesma lógica que o Object.keys , a diferença está em que ele lista os valores de cada chave.

const student3 = {
  Html: 'Muito Bom',
  Css: 'Bom',
  JavaScript: 'Ótimo',
  SoftSkill: 'Ótimo',
};

const listSkillsValuesWithFor = (student) => {
  const skills = [];
  for(skill in student) {
    skills.push(student[skill]);
  }

  return skills;
};

const listSkillsValuesWithValues = (student) => Object.values(student);

// Sem Object.values
//console.log(listSkillsValuesWithFor(student));

// Com Object.values
console.log(listSkillsValuesWithValues(student3));

