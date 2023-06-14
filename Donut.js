// google.charts.load("current", { packages: ["corechart"] });
// google.charts.setOnLoadCallback(drawChartDonut);

// function drawChartDonut() {
// var queryString = encodeURIComponent('SELECT I, count(A) GROUP BY I ORDER BY count(A) DESC LIMIT 10');

//     var query = new google.visualization.Query('https://docs.google.com/spreadsheets/d/1p_8akU1QOTz4V5CdrmmL2f-a4zcgFx29/edit?usp=sharing&headers=1&tq=' + queryString);
//     query.send(handleQueryResponse_);


// }
// function handleQueryResponse_(response) {
//     var data = response.getDataTable();
//     var options = {
//         title: 'My Daily Activities',
//         is3D: true,
//     };


//     var chart = new google.visualization.PieChart(document.getElementById('piechart_3d'));
//     chart.draw(data, options);
// }


google.charts.load("current", { packages: ["corechart"] });
google.charts.setOnLoadCallback(drawChartDonut);

function drawChartDonut() {
  var queryStringP = encodeURIComponent("SELECT SUM(P)");
  var queryStringQ = encodeURIComponent("SELECT SUM(Q)");
  var queryStringR = encodeURIComponent("SELECT SUM(R)");

  // Consulta y guarda cada resultado en una matriz
  var salesByRegion = [];
  Promise.all([
    getQueryPromise(queryStringP),
    getQueryPromise(queryStringQ),
    getQueryPromise(queryStringR),
  ])
    .then(([usaSum, japanSum, restSum]) => {
      salesByRegion.push(["US_Sales", usaSum]);
      salesByRegion.push(["EU_sales", japanSum]);
      salesByRegion.push(["JP_sales", restSum]);

      // Creación y carga de la tabla de datos para el gráfico de donas
      var data = new google.visualization.DataTable();
      data.addColumn("string", "Region");
      data.addColumn("number", "TotalSales");
      data.addRows(salesByRegion);

      // Establecimiento de las opciones del gráfico
      var options = {
        width: "100%",
        title: "Ventas totales por región",
        is3D: true,
      };

      // Dibujo del gráfico de donas
      var chart = new google.visualization.PieChart(
        document.getElementById("piechart_3d")
      );
      chart.draw(data, options);
    })
    .catch((error) => {
      console.error("Error al obtener los resultados de las consultas:", error);
    });
}

// Función de ayuda para realizar consultas individuales
function getQueryPromise(queryString) {
  return new Promise((resolve, reject) => {
    var query = new google.visualization.Query('https://docs.google.com/spreadsheets/d/1p_8akU1QOTz4V5CdrmmL2f-a4zcgFx29/edit?usp=sharing&headers=1&tq=' + queryString);
    query.send((response) => {
      if (response.isError()) {
        reject(response);
      } else {
        resolve(response.getDataTable().getValue(0, 0));
      }
    });
  });
}



