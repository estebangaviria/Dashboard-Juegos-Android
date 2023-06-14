google.charts.load("current", { packages: ["corechart"] });
google.charts.setOnLoadCallback(drawChartHistogram);

function drawChartHistogram() {
  var queryString = encodeURIComponent(
    'SELECT A, T WHERE I = "GAME_CARD"'
  );
  var query = new google.visualization.Query('https://docs.google.com/spreadsheets/d/1p_8akU1QOTz4V5CdrmmL2f-a4zcgFx29/edit?usp=sharing&headers=1&tq=' + queryString);
  query.send(handleQueryResponseHistogram);
}

function handleQueryResponseHistogram(response) {
  if (response.isError()) {
    console.error("Error in query: " + response.getMessage() + " " + response.getDetailedMessage());
    return;
  }
  var data = response.getDataTable();

  var options = {
    width: "100%",
    title: "Distribución de calificaciones de usuarios para juegos de cartas",
    legend: { position: "none" },
    hAxis: {
      title: "Calificación del usuario",
    },
    vAxis: {
      title: "Frecuencia",
    },
    histogram: { bucketSize: 1 },
  };

  var chart = new google.visualization.Histogram(
    document.getElementById("histogram")
  );
  chart.draw(data, options);
}