
var chart_pickedMoveTypeBestScoreDiffSubSingleStatisticChart0_f2c83 = new Chart(document.getElementById('chart_pickedMoveTypeBestScoreDiffSubSingleStatisticChart0_f2c83'), {
    type: 'line',
    data: {
        datasets: [
            {
                  label: 'ChangeMove(Lecture.day)',
                        stepped: true,
                        pointRadius: 0,
                    borderWidth: 1
                  ,
                  data: [
                    {x: 226, y: 1}, {x: 594, y: 1}
                  ]
                }, 
{
                  label: 'ChangeMove(Lecture.room)',
                        stepped: true,
                        pointRadius: 0,
                    borderWidth: 1
                  ,
                  data: [
                    {x: 286, y: 0}, {x: 328, y: 1}, {x: 355, y: 0}, {x: 467, y: 1}, {x: 700, y: 1}, {x: 707, y: 0}, {x: 723, y: 0}, {x: 889, y: 1}, {x: 905, y: 0}, {x: 50877, y: 0}
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
                text: 'comp01_Tabu 3 500_0 picked move type best hard score diff statistic'
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
                suggestedMax: 50877,
                type: 'linear',
                display: true
            },
            y: {
                title: {
                    display: true,
                    text: 'Best hard score diff'
                },
                ticks: {
                        stepSize: 0.01
                        
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
  chart_pickedMoveTypeBestScoreDiffSubSingleStatisticChart0_f2c83.resize(1280, 720);
});
window.addEventListener('afterprint', () => {
  chart_pickedMoveTypeBestScoreDiffSubSingleStatisticChart0_f2c83.resize();
});
