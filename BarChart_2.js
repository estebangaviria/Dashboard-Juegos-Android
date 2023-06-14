google.charts.load('current', {packages: ['corechart', 'bar']});
// google.charts.load('current', {packages: ['corechart']}); 
google.charts.setOnLoadCallback(drawBasic_);

function drawBasic_() {
  // var queryString = encodeURIComponent('SELECT A,C,J WHERE I ="GAME_ACTION" ORDER BY  C DESC LIMIT 5');
  var queryString = encodeURIComponent('SELECT I, sum(S) GROUP BY I ORDER BY sum(S) DESC');
  var query = new google.visualization.Query('https://docs.google.com/spreadsheets/d/1p_8akU1QOTz4V5CdrmmL2f-a4zcgFx29/edit?usp=sharing&headers=1&tq=' + queryString);
  query.send(handleQueryResponse___);
}

function handleQueryResponse___(response) {
  var data_ = response.getDataTable();

  var options = {
    width: "100%",
    title: 'Android Category Sales',
    // chartArea: {width: '50%'},
    hAxis: {
      title: 'Sales in millions of units',
      minValue: 0
    },
    vAxis: {
      title: 'Category Name'
    }
  };

  var chart_ = new google.visualization.BarChart(document.getElementById('chart_div_'));

  chart_.draw(data_, options);
}


  // function drawBasic() {

//       var data = google.visualization.arrayToDataTable([
//         ['City', '2010 Population',],
//         ['New York City, NY', 8175000],
//         ['Los Angeles, CA', 3792000],
//         ['Chicago, IL', 2695000],
//         ['Houston, TX', 2099000],
//         ['Philadelphia, PA', 1526000]
//       ]);

//       var options = {
//         title: 'Population of Largest U.S. Cities',
//         chartArea: {width: '50%'},
//         hAxis: {
//           title: 'Total Population',
//           minValue: 0
//         },
//         vAxis: {
//           title: 'City'
//         }
//       };

//       var chart = new google.visualization.BarChart(document.getElementById('chart_div'));

//       chart.draw(data, options);
//     }


// google.charts.load('current', {packages: ['corechart', 'bar']});

// google.charts.setOnLoadCallback(drawBasic);

// function drawBasic() {
//     var queryString = encodeURIComponent('SELECT A,C,J WHERE I ="GAME_ACTION" ORDER BY  C DESC LIMIT 5');
//     var query = new google.visualization.Query('https://docs.google.com/spreadsheets/d/1p_8akU1QOTz4V5CdrmmL2f-a4zcgFx29/edit?usp=sharing&headers=1&tq=' + queryString);
//     query.send(handleQueryResponse);
//   }
  
//   function handleQueryResponse(response) {
//     var data = response.getDataTable();
  
//     var options = {
//       title: 'Android Games Sales',
//       chartArea: {width: '70%', height: '70%'},
//       hAxis: {
//         title: 'Sales in millions of units',
//         minValue: 0,
//         textStyle: {
//           fontSize: 14,
//           bold: true,
//           color: '#4d4d4d'
//         },
//         titleTextStyle: {
//           fontSize: 18,
//           bold: true,
//           color: '#4d4d4d'
//         }
//       },
//       vAxis: {
//         title: 'Game Title',
//         textStyle: {
//           fontSize: 14,
//           bold: true,
//           color: '#4d4d4d'
//         },
//         titleTextStyle: {
//           fontSize: 18,
//           bold: true,
//           color: '#4d4d4d'
//         }
//       },
//       legend: {
//         position: 'none'
//       },
//       colors: ['#2196f3']
//     };
  
//     var chart = new google.visualization.BarChart(document.getElementById('chart_div'));
  
//     chart.draw(data, options);
//   }
