const pieChartEl = document.getElementById('pie-chart');
    const renderPieCharts = () => {
      const pieChartData = google.visualization.arrayToDataTable([
        ['Lable', 'Count'],
        ['80%', 84],
        ['20%', 16],
      ]);

      // Pie Chart
      const pieChart = new google.visualization.PieChart(pieChartEl);
      const pieChartOptions = {
        backgroundColor: 'transparent',
        pieSliceBorderColor: '#333642',
        chartArea: {
          width: '100%',
          height: '95%'
        },
        legend: {
          textStyle: {
            color: '#ffffff',
          }
        }
      };

      pieChart.draw(pieChartData, pieChartOptions);
      // pieChartIcons.draw(pieChartData, pieChartIconsOptions);
    }

    // init Google Pie Charts
    google.load('visualization', '1', {
      packages: ['corechart']
    });
    google.setOnLoadCallback(renderPieCharts);