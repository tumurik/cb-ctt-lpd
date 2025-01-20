
var chart_pickedMoveTypeBestScoreDiffSubSingleStatisticChart0_883ac = new Chart(document.getElementById('chart_pickedMoveTypeBestScoreDiffSubSingleStatisticChart0_883ac'), {
    type: 'line',
    data: {
        datasets: [
            {
                  label: 'ChangeMove(Lecture.period)',
                        stepped: true,
                        pointRadius: 0,
                    borderWidth: 1
                  ,
                  data: [
                    {x: 37072, y: 1}, {x: 41394, y: 0}, {x: 42346, y: 0}, {x: 47338, y: 1}, {x: 47422, y: 0}
                  ]
                }, 
{
                  label: 'ChangeMove(Lecture.room)',
                        stepped: true,
                        pointRadius: 0,
                    borderWidth: 1
                  ,
                  data: [
                    {x: 38470, y: 0}, {x: 41459, y: 0}, {x: 41504, y: 1}, {x: 41508, y: 0}, {x: 42773, y: 0}, {x: 43231, y: 1}, {x: 43232, y: 0}, {x: 43774, y: 1}, {x: 44197, y: 0}, {x: 44223, y: 0}, {x: 44224, y: 1}, {x: 44934, y: 0}, {x: 58914, y: 0}
                  ]
                }, 
{
                  label: 'ChangeMove(Lecture.day)',
                        stepped: true,
                        pointRadius: 0,
                    borderWidth: 1
                  ,
                  data: [
                    {x: 40736, y: 1}, {x: 41503, y: 0}, {x: 44912, y: 0}, {x: 44933, y: 1}, {x: 47015, y: 0}, {x: 52743, y: 0}
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
                text: 'comp01_Simulated Annealing startingTemperature 1hard20soft_0 picked move type best hard score diff statistic'
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
                suggestedMax: 58914,
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
  chart_pickedMoveTypeBestScoreDiffSubSingleStatisticChart0_883ac.resize(1280, 720);
});
window.addEventListener('afterprint', () => {
  chart_pickedMoveTypeBestScoreDiffSubSingleStatisticChart0_883ac.resize();
});
