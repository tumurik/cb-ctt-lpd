
var chart_constraintMatchTotalBestScoreSubSingleStatisticChart0_4044e = new Chart(document.getElementById('chart_constraintMatchTotalBestScoreSubSingleStatisticChart0_4044e'), {
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
                    {x: 185, y: -9}, {x: 188, y: -8}, {x: 198, y: -5}, {x: 212, y: -6}, {x: 225, y: -2}, {x: 238, y: -5}, {x: 247, y: -4}, {x: 270, y: -3}, {x: 273, y: -2}, {x: 311, y: -4}, {x: 348, y: -3}, {x: 410, y: -1}, {x: 438, y: -2}, {x: 468, y: -3}, {x: 475, y: -2}, {x: 512, y: -1}, {x: 602, y: 0}, {x: 60000, y: 0}
                  ]
                }, 
{
                  label: 'Curriculum conflict weight',
                        stepped: true,
                        pointRadius: 0,
                    borderWidth: 1
                  ,
                  data: [
                    {x: 198, y: -2}, {x: 212, y: 0}, {x: 225, y: -4}, {x: 227, y: -3}, {x: 238, y: -1}, {x: 247, y: -2}, {x: 256, y: -1}, {x: 273, y: -2}, {x: 311, y: 0}, {x: 410, y: -2}, {x: 438, y: -1}, {x: 468, y: 0}, {x: 512, y: -1}, {x: 561, y: 0}, {x: 60000, y: 0}
                  ]
                }, 
{
                  label: 'Teacher and course unavailability conflict weight',
                        stepped: true,
                        pointRadius: 0,
                    borderWidth: 1
                  ,
                  data: [
                    {x: 227, y: -1}, {x: 238, y: 0}, {x: 475, y: -1}, {x: 556, y: 0}, {x: 60000, y: 0}
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
                text: 'comp01_LAHC 100_0 constraint match total best hard score diff statistic'
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
  chart_constraintMatchTotalBestScoreSubSingleStatisticChart0_4044e.resize(1280, 720);
});
window.addEventListener('afterprint', () => {
  chart_constraintMatchTotalBestScoreSubSingleStatisticChart0_4044e.resize();
});
