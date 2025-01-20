
var chart_constraintMatchTotalBestScoreSubSingleStatisticChart0_7990a = new Chart(document.getElementById('chart_constraintMatchTotalBestScoreSubSingleStatisticChart0_7990a'), {
    type: 'line',
    data: {
        datasets: [
            {
                  label: 'Room occupancy conflict weight',
                        stepped: true,
                        pointRadius: 0,
                    borderWidth: 1
                  ,
                  data: [
                    {x: 217, y: -11}, {x: 238, y: -9}, {x: 258, y: -10}, {x: 334, y: -8}, {x: 366, y: -7}, {x: 977, y: -6}, {x: 1987, y: -5}, {x: 2111, y: -4}, {x: 2815, y: -3}, {x: 2895, y: -2}, {x: 10795, y: -1}, {x: 12932, y: -2}, {x: 13094, y: -1}, {x: 18693, y: -2}, {x: 18856, y: -1}, {x: 60000, y: -1}
                  ]
                }, 
{
                  label: 'Curriculum conflict weight',
                        stepped: true,
                        pointRadius: 0,
                    borderWidth: 1
                  ,
                  data: [
                    {x: 217, y: -1}, {x: 238, y: 0}, {x: 258, y: -1}, {x: 366, y: 0}, {x: 491, y: -1}, {x: 1238, y: 0}, {x: 2815, y: -1}, {x: 2895, y: 0}, {x: 2957, y: -1}, {x: 3081, y: 0}, {x: 3121, y: -1}, {x: 10795, y: 0}, {x: 13094, y: -1}, {x: 13259, y: 0}, {x: 19013, y: -1}, {x: 35236, y: 0}, {x: 36301, y: -1}, {x: 60000, y: -1}
                  ]
                }, 
{
                  label: 'Teacher conflict weight',
                        stepped: true,
                        pointRadius: 0,
                    borderWidth: 1
                  ,
                  data: [
                    {x: 491, y: -1}, {x: 911, y: 0}, {x: 977, y: -1}, {x: 1238, y: 0}, {x: 2815, y: -1}, {x: 2895, y: 0}, {x: 3018, y: -1}, {x: 3081, y: 0}, {x: 3121, y: -1}, {x: 10795, y: 0}, {x: 19013, y: -1}, {x: 35236, y: 0}, {x: 36301, y: -1}, {x: 36379, y: 0}, {x: 36455, y: -1}, {x: 60000, y: -1}
                  ]
                }, 
{
                  label: 'Teacher and course unavailability conflict weight',
                        stepped: true,
                        pointRadius: 0,
                    borderWidth: 1
                  ,
                  data: [
                    {x: 13336, y: -1}, {x: 18693, y: 0}, {x: 60000, y: 0}
                  ]
                }
        ]
    },
    options: {
        animation: false,
        responsive: true,
        maintainAspectRatio: false,
        spanGaps: true,
        plugins: {
            title: {
                display: true,
                text: 'comp01_Tabu 10 2000_0 constraint match total best hard score diff statistic'
            },
            tooltip: {
                callbacks: {
                        title: function(context) {
                            return humanizeTime(context[0].parsed.x);
                        }
                        
                }
            }
        },
        scales: {
            x: {
                title: {
                    display: true,
                    text: 'Time spent'
                },
                ticks: {
                        stepSize: 1000
                        ,
                        callback: function(value, index) {
                            return humanizeTime(value);
                        }
                },
                suggestedMin: 0,
                suggestedMax: 60000,
                type: 'linear',
                display: true
            },
            y: {
                title: {
                    display: true,
                    text: 'Constraint match total hard score'
                },
                ticks: {
                        stepSize: 0.1
                        
                },
                type: 'linear',
                display: true
            }
        },
watermark: {
    image: "website/img/timefold-logo-stacked-positive.svg",
    x: 15,
    y: 15,
    width: 48,
    height: 50,
    opacity: 0.1,
    alignX: "right",
    alignY: "bottom",
    alignToChartArea: true,
    position: "front",
}    },
plugins: [{ 
    id: 'customPlugin',
    beforeDraw: (chart, args, options) => {
          const ctx = chart.canvas.getContext('2d');
          ctx.save();
          ctx.globalCompositeOperation = 'destination-over';
          ctx.fillStyle = 'white';
          ctx.fillRect(0, 0, chart.canvas.width, chart.canvas.height);
          ctx.restore();
    }
}]
});

window.addEventListener('beforeprint', () => {
  chart_constraintMatchTotalBestScoreSubSingleStatisticChart0_7990a.resize(1280, 720);
});
window.addEventListener('afterprint', () => {
  chart_constraintMatchTotalBestScoreSubSingleStatisticChart0_7990a.resize();
});
