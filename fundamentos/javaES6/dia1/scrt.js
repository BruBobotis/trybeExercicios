const customer = {
    firstName: 'Roberto',
    age: 22,
    job: 'Teacher',
  };
  
  let newKey = 'lastName';
  const lastName = 'Ferreira';
  
  const adicionaPropriedade = (objeto, novaPropriedade, valor) => {
    objeto[novaPropriedade] = valor
  };
  
  adicionaPropriedade(customer, newKey, lastName);
  console.log(customer);
  
  newKey = 'fullName';
  const fullName = `${customer.firstName} ${customer.lastName}`;
  
  adicionaPropriedade(customer, newKey, fullName);
  console.log(customer);

  const pessoaEstudante = {

  }
  
  let newA = 'Nome';
  const nome = 'Flavia';

  adicionaPropriedade(pessoaEstudante, newA, nome);

  let newB = 'Email';
  const Email = 'Flavia@flavinha.com';

  adicionaPropriedade(pessoaEstudante, newB, Email);

  let newC = 'Telefone';
  const telefone = '4002-8922';

  adicionaPropriedade(pessoaEstudante, newC, telefone);

  let newD = 'Github';
  const github = 'https://github.com/Flavinha';

  adicionaPropriedade(pessoaEstudante, newD, github);

  let newE = 'linkedIn';
  const linkedIn = 'https://www.linkedin.com/in/devFlavinha/';

  adicionaPropriedade(pessoaEstudante, newE, linkedIn);

  console.log(pessoaEstudante);
