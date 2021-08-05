const newEmployees = (generatorEmployee) => {
    const employees = {
      id1: generatorEmployee('Pedro Guerra'), // Nome: Pedro Guerra -> Chame sua função passando o nome Pedro Guerra como parâmetro, substituindo as aspas
      id2: generatorEmployee('Luiza Drumond'), // Nome: Luiza Drumond -> Chame sua função passando o nome Luiza Drumond como parâmetro, substituindo as aspas
      id3: generatorEmployee('Carla Paiva'), // Nome: Carla Paiva -> Chame sua função passando o nome Carla Paiva como parâmetro, substituindo as aspas
    }
    return employees;
  };

  const generatorEmployee = (fullname) => {
    const email = fullname.toLowerCase().split(' ').join('_');
    return {fullname, email: `${email}@trybe.com`};
  };

  console.log(newEmployees(generatorEmployee));