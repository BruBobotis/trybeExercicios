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
            marguerita: {
                amount: 1,
                price: 25,
            },
            pepperoni: {
                amount: 1,
                price: 20,
            },
        },
        drinks: {
            coke: {
                type: 'Coca-Cola Zero',
                price: 10,
                amount: 1,
            },
        },
        delivery: {
            deliveryPerson: 'Ana Silveira',
            price: 5,
        },
    },
    payment: {
        total: 60,
    },
};

const customerInfo = (order) => {
    const address = 'address';
    const deliveryPerson = order.order.delivery.deliveryPerson;
    const customerName = order.name;
    const customerPhone = order.phoneNumber;
    const street = order[address].street;
    const number = order[address].number;
    const apartment = order[address].apartment;
    console.log(`Olá ${deliveryPerson}, entrega para: ${customerName}, telefone: ${customerPhone}, ${street}, N°${number}, AP: ${apartment}`);

};
customerInfo(order);


const orderModifier = (order) => {
    const newBuyer = order.name = 'Luis Silva';
    const pizzas = Object.keys(order.order.pizza);
    const cocaCola = order.order.drinks.coke.type;
    const payment = order.payment.total = 'R$ 50,00';
    console.log (`Olá ${newBuyer}, o total do seu pedido de ${pizzas[0]}, ${pizzas[1]} e ${cocaCola} é ${payment}`)
};

orderModifier(order);