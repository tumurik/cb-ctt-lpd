
var chart_constraintMatchTotalBestScoreSubSingleStatisticChart0_9dec6 = new Chart(document.getElementById('chart_constraintMatchTotalBestScoreSubSingleStatisticChart0_9dec6'), {
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
                    {x: 37072, y: -9}, {x: 38470, y: -5}, {x: 38658, y: -6}, {x: 38905, y: -5}, {x: 40574, y: -6}, {x: 40736, y: -4}, {x: 40737, y: -5}, {x: 41394, y: -4}, {x: 41459, y: -2}, {x: 41503, y: -3}, {x: 41507, y: -4}, {x: 42346, y: -2}, {x: 42773, y: -4}, {x: 43231, y: -2}, {x: 43774, y: -3}, {x: 44224, y: -2}, {x: 44912, y: -1}, {x: 47015, y: 0}, {x: 60000, y: 0}
                  ]
                }, 
{
                  label: 'Teacher and course unavailability conflict weight',
                        stepped: true,
                        pointRadius: 0,
                    borderWidth: 1
                  ,
                  data: [
                    {x: 38470, y: -1}, {x: 38658, y: 0}, {x: 38905, y: -1}, {x: 40345, y: 0}, {x: 40574, y: -1}, {x: 40736, y: 0}, {x: 41394, y: -1}, {x: 41503, y: 0}, {x: 42346, y: -2}, {x: 42773, y: -1}, {x: 43774, y: 0}, {x: 47015, y: -1}, {x: 47338, y: 0}, {x: 60000, y: 0}
                  ]
                }, 
{
                  label: 'Curriculum conflict weight',
                        stepped: true,
                        pointRadius: 0,
                    borderWidth: 1
                  ,
                  data: [
                    {x: 38470, y: -3}, {x: 38658, y: -1}, {x: 40345, y: -3}, {x: 40574, y: -1}, {x: 40736, y: -3}, {x: 40737, y: -2}, {x: 41459, y: -3}, {x: 41504, y: -2}, {x: 41507, y: -1}, {x: 42773, y: 0}, {x: 43231, y: -1}, {x: 43774, y: 0}, {x: 44912, y: -1}, {x: 44933, y: 0}, {x: 60000, y: 0}
                  ]
                }, 
{
                  label: 'Teacher conflict weight',
                        stepped: true,
                        pointRadius: 0,
                    borderWidth: 1
                  ,
                  data: [
                    {x: 38658, y: -1}, {x: 40345, y: 0}, {x: 60000, y: 0}
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
                text: 'comp01_Simulated Annealing startingTemperature 1hard20soft_0 constraint match total best hard score diff statistic'
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
  chart_constraintMatchTotalBestScoreSubSingleStatisticChart0_9dec6.resize(1280, 720);
});
window.addEventListener('afterprint', () => {
  chart_constraintMatchTotalBestScoreSubSingleStatisticChart0_9dec6.resize();
});
