
var chart_pickedMoveTypeBestScoreDiffSubSingleStatisticChart0_16da9 = new Chart(document.getElementById('chart_pickedMoveTypeBestScoreDiffSubSingleStatisticChart0_16da9'), {
    type: 'line',
    data: {
        datasets: [
            {
                  label: 'ChangeMove(Lecture.room)',
                        stepped: true,
                        pointRadius: 0,
                    borderWidth: 1
                  ,
                  data: [
                    {x: 39122, y: 1}, {x: 39403, y: 0}, {x: 39811, y: 0}, {x: 41184, y: 1}, {x: 41185, y: 0}, {x: 41784, y: 0}, {x: 41787, y: 1}, {x: 41788, y: 0}, {x: 42073, y: 0}, {x: 44065, y: 1}, {x: 44099, y: 0}, {x: 44395, y: 0}, {x: 44397, y: 1}, {x: 44732, y: 0}, {x: 45932, y: 0}, {x: 47009, y: 1}, {x: 47585, y: 0}, {x: 59643, y: 0}
                  ]
                }, 
{
                  label: 'ChangeMove(Lecture.period)',
                        stepped: true,
                        pointRadius: 0,
                    borderWidth: 1
                  ,
                  data: [
                    {x: 39480, y: 1}, {x: 39811, y: 1}, {x: 44098, y: 0}, {x: 51332, y: 0}
                  ]
                }, 
{
                  label: 'ChangeMove(Lecture.day)',
                        stepped: true,
                        pointRadius: 0,
                    borderWidth: 1
                  ,
                  data: [
                    {x: 41784, y: 0}, {x: 44395, y: 0}, {x: 44730, y: 1}, {x: 47718, y: 0}
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
                text: 'comp01_Simulated Annealing startingTemperature 1hard70soft_0 picked move type best hard score diff statistic'
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
                suggestedMax: 59643,
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
  chart_pickedMoveTypeBestScoreDiffSubSingleStatisticChart0_16da9.resize(1280, 720);
});
window.addEventListener('afterprint', () => {
  chart_pickedMoveTypeBestScoreDiffSubSingleStatisticChart0_16da9.resize();
});
