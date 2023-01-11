const cabecalho = document.getElementById("header-container");
cabecalho.style.backgroundColor = "rgb(0, 176, 105)";

const emergenciaTasks = document.getElementsByClassName("emergency-tasks")[0];
emergenciaTasks.style.backgroundColor = 'rgb(255, 159, 132)';

const emergencia = document.querySelectorAll(".emergency-tasks h3");
for (let index = 0; index < emergencia.length; index += 1) {
    emergencia[index].style.backgroundColor = 'rgb(165, 0, 243)';
}

const semEmergenciaTasks = document.querySelector('.no-emergency-tasks');
semEmergenciaTasks.style.backgroundColor = 'rgb(249, 219, 94)';

const semEmergenciaTasksHeaders = document.querySelectorAll('.no-emergency-tasks h3');
for (let index = 0; index < semEmergenciaTasksHeaders.length; index += 1) {
  semEmergenciaTasksHeaders[index].style.backgroundColor = 'rgb(35, 37, 37)';
}

const rodape = document.getElementById("footer-container")
rodape.style.backgroundColor = "rgb(0, 53, 51)";