import { dataCovid } from "./covid-data.js";

let dias = [];
let cantInfectados = [];
let cantMuertos = [];
let colorInf = [];
let colorDeath = [];

dataCovid.forEach((objData) => {

    let fechaString = objData.Date.split("T");
    fechaString = fechaString[0].split("-");
    let fecha = `${fechaString[2]}-${fechaString[1]}-${fechaString[0]}`;
    dias.push(fecha);
    cantInfectados.push(objData.Confirmed);
    cantMuertos.push(objData.Deaths);
    colorInf.push('yellow');
    colorDeath.push('rgba(255, 99, 132, 1)')
    
})

var ctx = document.getElementById('miGrafico');
var myChart = new Chart(ctx, {
    type: 'bar',
    data: {
        labels: dias,
        datasets: [{
            label: '# de Infectados',
            data: cantInfectados,
            backgroundColor: colorInf,
            borderWidth: 1
        },
        {
            label: '# de Muertos',
            data: cantMuertos,
            backgroundColor: colorDeath,
            borderColor: [
                'rgba(255, 99, 133, 1)',
            ],
            borderWidth: 1
        }
    ]
    },
    options: {
        scales: {
            yAxes: [{
                ticks: {
                    beginAtZero: true,
                    callback: function(value, index, values) {
                        return value / 1e6 + "M";
                    }
                }
            }]
        }
    }
});