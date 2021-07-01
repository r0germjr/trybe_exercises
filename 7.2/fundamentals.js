//Parte I

const customer = {
  firstName: 'Roberto',
  lastName: 'Faria', // Propriedade adicionada.
  age: 22,
  job: 'Teacher',
};

const newProperty = (object, key, value) =>  object[key] = value;
newProperty(customer, 'city', 'Golden Coast');
console.log(customer);