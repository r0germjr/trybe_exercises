const order = {
  name: 'Rafael Andrade',
  phoneNumber: '11-98763-1416',
  address: {
    street: 'Rua das Flores',
    number: '389',
    apartment: '701',
  },
  order: {
    pizza: {
      margherita: {
        amount: 1,
        price: 25,
      },
      pepperoni: {
        amount: 1,
        price: 20,
      }
    },
    drinks: {
      coke: {
        type: 'Coca-Cola Zero',
        price: 10,
        amount: 1,
      }
    },
    delivery: {
      deliveryPerson: 'Ana Silveira',
      price: 5,
    }
  },
  payment: {
    total: 60,
  },
};


const customerInfo = (order) => {
  const deliveryPerson = order.order.delivery.deliveryPerson;
  const orderName = order.name;
  const telNumber = order.phoneNumber;
  const adress = order.address.street;
  const numberAdress = order.address.number;
  const numberAp = order.address.apartment;

  return `Olá ${deliveryPerson}, entrega para: ${orderName}, Telefone: ${telNumber}, ${adress}, N: ${numberAdress}, AP: ${numberAp}`;
}

console.log(customerInfo(order));

const orderModifier = (order) => {
  const deliveryPerson = order.name = 'Luiz Silva';
  const pizzas = Object.keys(order.order.pizza);
  const drinks = order.order.drinks.coke.type;
  const newTotal = order.payment.total = '50';



  return `Olá ${deliveryPerson}, o total do seu pedido de ${pizzas} e ${drinks} é ${newTotal}`;

}

console.log(orderModifier(order));