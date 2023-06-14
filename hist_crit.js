google.charts.load("current", { packages: ["corechart"] });
google.charts.setOnLoadCallback(drawChartHistogram_);

function drawChartHistogram_() {
  var queryString = encodeURIComponent(
    'SELECT A, U WHERE I = "GAME_CARD"'
  );
  var query = new google.visualization.Query('https://docs.google.com/spreadsheets/d/1p_8akU1QOTz4V5CdrmmL2f-a4zcgFx29/edit?usp=sharing&headers=1&tq=' + queryString);
  query.send(handleQueryResponseHistogram_);
}

function handleQueryResponseHistogram_(response) {
  if (response.isError()) {
    console.error("Error in query: " + response.getMessage() + " " + response.getDetailedMessage());
    return;
  }
  var data = response.getDataTable();

  var options = {
    width: "100%",
    title: "Distribución de calificaciones de Criticos para juegos de cartas",
    legend: { position: "none" },
    hAxis: {
      title: "Calificación del critico",
    },
    vAxis: {
      title: "Frecuencia",
    },
    histogram: { bucketSize: 1 },
  };

  var chart = new google.visualization.Histogram(
    document.getElementById("histogram_")
  );
  chart.draw(data, options);
}