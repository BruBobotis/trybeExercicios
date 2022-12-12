const createDaysOfTheWeek = () => {
    const weekDays = ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado']
    const weekDaysList = document.querySelector('.week-days');

    for (let index = 0; index < weekDays.length; index += 1) {
        const days = weekDays[index];
        const dayListItem = document.createElement('li');
        dayListItem.innerHTML = days;

        weekDaysList.appendChild(dayListItem);
    };
}

createDaysOfTheWeek();

// Escreva seu código abaixo.
//parte 1
const decemberDaysList = [27, 28, 29,'30', 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31];
const calendary = () => {
    const daysCalendary = document.querySelector('#days');
    for (index = 0; index < decemberDaysList.length; index += 1) {
        let day = decemberDaysList[index];
        let dayItem = document.createElement('li');
        dayItem.innerHTML = day;
        if (day === 24 || day === 31) {
            dayItem.className = 'day holiday';
            daysCalendary.appendChild(dayItem);
        } else if (day === 2 || day === 9 || day === 16 || day === 23 || day === 30) {
            dayItem.className = 'day friday';
            daysCalendary.appendChild(dayItem);
        } else if (day === 25) {
            dayItem.className = 'day holiday';
            daysCalendary.appendChild(dayItem);
        } else {
            dayItem.className = 'day';
            daysCalendary.appendChild(dayItem);
        }
    }
}
calendary();
//parte 2
const holidays = (button) => {
    const holidays = document.querySelector('.buttons-container');
    let buttonHoliday = document.createElement('button');
    let buttonID = 'btn-holiday';
    buttonHoliday.innerHTML = button;
    buttonHoliday.id = buttonID;
    holidays.appendChild(buttonHoliday);
}
holidays('Feriados');
//parte 3
const colorHoliday = () => {
    const colorHoliday = document.querySelectorAll('.holiday');
    const button = document.querySelector('#btn-holiday');
    let newColor = 'red';
    let colorLetter = '#777';
    let backgroundColor = 'rgb(238, 238, 238)';
    let newBackgroundColor = 'rgb(182, 182, 182)';
    button.addEventListener('click', () => {
        for (index = 0; index < colorHoliday.length; index += 1) {
            if (colorHoliday[index].style.color === newColor || colorHoliday[index].style.backgroundColor === newBackgroundColor) {
                colorHoliday[index].style.color = colorLetter;
                colorHoliday[index].style.backgroundColor = backgroundColor;
            } else {
                colorHoliday[index].style.color = newColor;
                colorHoliday[index].style.backgroundColor = newBackgroundColor;
            }
        }
    });
}
colorHoliday();
//parte 4
const friday = (button) => {
    const buttonFriday = document.querySelector('.buttons-container')
    let buttonClick = document.createElement('button');
    let buttonID = 'btn-friday';
    buttonClick.innerHTML = button;
    buttonClick.id = buttonID;
    buttonFriday.appendChild(buttonClick);
}
friday('Sexta Feira');
//parte 5
const colorFriday = (event) => {
    const dayFriday = document.getElementsByClassName('friday');
    const buttonFriday = document.querySelector('#btn-friday');
    let newText = 'SEXTOU!!! VQV';
    buttonFriday.addEventListener('click', () => {
        for (index = 0; index < dayFriday.length; index += 1) {
            if (dayFriday[index].innerHTML === newText) {
            dayFriday[index].innerHTML = event[index];
            } else {
            dayFriday[index].innerHTML = newText;
            }
        }
    }) 
}
let december = [2, 9, 16, 23, 30]
colorFriday(december);
//parte 6
const dayZoom = () => {
    let days = document.querySelector('#days');
    days.addEventListener('mouseover', (event) => {
        event.target.style.fontWeight = '700';
        event.target.style.color = 'black';
    })
}
const dayNoZoom = () => {
    let days = document.querySelector('#days'); 
    days.addEventListener('mouseout', (event) => {
        event.target.style.fontWeight = '200';
        event.target.style.color = '#777';
    })
}
dayZoom();
dayNoZoom();