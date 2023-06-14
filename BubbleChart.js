// google.charts.load("current", { packages: ["corechart"] });
// google.charts.setOnLoadCallback(drawBasicBubble);

// function drawBasicBubble() {

//     var queryString = encodeURIComponent('SELECT A, C, T, I, J  ORDER BY C LIMIT 5');

//     var query = new google.visualization.Query('https://docs.google.com/spreadsheets/d/1p_8akU1QOTz4V5CdrmmL2f-a4zcgFx29/edit?usp=sharing&headers=1&tq=' + queryString);
//     query.send(handleQueryResponseBubble);
// }

// function handleQueryResponseBubble(response) {
//     var dataBubble = response.getDataTable();
//     var options = {
//         width: "100%",
//         title: 'Fertility rate vs life expectancy in selected countries (2010).' +
//             ' X=Life Expectancy, Y=Fertility, Bubble size=Population, Bubble color=Region',
//         hAxis: {
//             title: 'Life Expectancy'
//         },
//         vAxis: {
//             title: 'Fertility Rate'
//         },
//         bubble: {
//             textStyle: {
//                 auraColor: 'none',
//             }
//         }
//     };

//     var chartBubble = new google.visualization.BubbleChart(document.getElementById('noAura'));

//     chartBubble.draw(dataBubble, options);
// }

google.charts.load("current", { packages: ["corechart"] });
google.charts.setOnLoadCallback(drawBasicBubble);

function drawBasicBubble() {
    var queryString = encodeURIComponent('SELECT I, T, C, A ORDER BY C DESC LIMIT 5');
    var query = new google.visualization.Query('https://docs.google.com/spreadsheets/d/1p_8akU1QOTz4V5CdrmmL2f-a4zcgFx29/edit?usp=sharing&headers=1&tq=' + queryString);
    query.send(handleQueryResponseBubble);
}

function handleQueryResponseBubble(response) {
    var dataBubble = response.getDataTable();
    var options = {
        width: "100%",
        title: 'Relación entre calificación de usuarios y total de calificaciones en diferentes categorías de juegos.' +
            ' X=Calificación de usuario, Y=Total de calificaciones, Color=Categoría',
        hAxis: {
            title: 'Calificación de usuario'
        },
        vAxis: {
            title: 'Total de calificaciones'
        },
        bubble: {
            textStyle: {
                auraColor: 'none',
            }
        }
    };

    var chartBubble = new google.visualization.BubbleChart(document.getElementById('noAura'));

    chartBubble.draw(dataBubble, options);
}