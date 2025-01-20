
var chart_constraintMatchTotalBestScoreSubSingleStatisticChart0_c627a = new Chart(document.getElementById('chart_constraintMatchTotalBestScoreSubSingleStatisticChart0_c627a'), {
    type: 'line',
    data: {
        datasets: [
            {
                  label: 'Teacher and course unavailability conflict weight',
                        stepped: true,
                        pointRadius: 0,
                    borderWidth: 1
                  ,
                  data: [
                    {x: 39122, y: -2}, {x: 39403, y: 0}, {x: 39480, y: -1}, {x: 39811, y: 0}, {x: 60000, y: 0}
                  ]
                }, 
{
                  label: 'Room occupancy conflict weight',
                        stepped: true,
                        pointRadius: 0,
                    borderWidth: 1
                  ,
                  data: [
                    {x: 39122, y: -4}, {x: 39403, y: -6}, {x: 39480, y: -7}, {x: 39811, y: -5}, {x: 41784, y: -5}, {x: 41787, y: -3}, {x: 42072, y: -5}, {x: 42073, y: -4}, {x: 44065, y: -3}, {x: 44098, y: -2}, {x: 44395, y: -3}, {x: 44397, y: -2}, {x: 44730, y: -1}, {x: 47009, y: 0}, {x: 60000, y: 0}
                  ]
                }, 
{
                  label: 'Curriculum conflict weight',
                        stepped: true,
                        pointRadius: 0,
                    borderWidth: 1
                  ,
                  data: [
                    {x: 39122, y: -3}, {x: 39480, y: 0}, {x: 39811, y: -2}, {x: 41184, y: -1}, {x: 41784, y: -1}, {x: 41787, y: -2}, {x: 42072, y: 0}, {x: 44098, y: -1}, {x: 44395, y: 0}, {x: 60000, y: 0}
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
                text: 'comp01_Simulated Annealing startingTemperature 1hard70soft_0 constraint match total best hard score diff statistic'
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
  chart_constraintMatchTotalBestScoreSubSingleStatisticChart0_c627a.resize(1280, 720);
});
window.addEventListener('afterprint', () => {
  chart_constraintMatchTotalBestScoreSubSingleStatisticChart0_c627a.resize();
});
