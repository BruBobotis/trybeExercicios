import validator from 'validator';

const text = document.querySelector('#value');
const button = document.querySelector('#button');
const campo = document.querySelector('#option');
const validacao = document.querySelector('#answer');

button.addEventListener('click', (event) => {
    event.preventDefault();
    const campos = {
        cpf: validator.isTaxID(text.value, 'pt-BR'),
        hexColor: validator.isHexColor(text.value),
        email: validator.isEmail(text.value),
        url: validator.isURL(text.value)
    };
    validacao.innerHTML = `A validação retornou ${campos[campo.value]}`;
});