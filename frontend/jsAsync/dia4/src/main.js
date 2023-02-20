import Swal from 'sweetalert2';

import getAddressFromCep from './getAddressFromCep';
document.querySelector('button').addEventListener('click', handleClick);

export async function handleClick() {
  const cep = document.querySelector('input').value;

  try {
    const addressData = await getAddressFromCep(cep);
    document.querySelector('pre').innerHTML = JSON.stringify(addressData);
  } catch (error) {
    Swal.fire({
      icon: 'error',
      title: 'Oops...',
      text: `${error.message}`,
      footer: '<a href="">Why do I have this issue?</a>'
    })
  }
};
