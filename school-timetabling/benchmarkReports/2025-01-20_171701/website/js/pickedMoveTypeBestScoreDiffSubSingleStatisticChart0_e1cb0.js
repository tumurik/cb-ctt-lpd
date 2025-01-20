
var chart_pickedMoveTypeBestScoreDiffSubSingleStatisticChart0_e1cb0 = new Chart(document.getElementById('chart_pickedMoveTypeBestScoreDiffSubSingleStatisticChart0_e1cb0'), {
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
                    {x: 185, y: 1}, {x: 212, y: 1}, {x: 225, y: 0}, {x: 238, y: 0}, {x: 256, y: 1}, {x: 270, y: 1}, {x: 273, y: 0}, {x: 348, y: 1}, {x: 357, y: 0}, {x: 14589, y: 0}
                  ]
                }, 
{
                  label: 'ChangeMove(Lecture.period)',
                        stepped: true,
                        pointRadius: 0,
                    borderWidth: 1
                  ,
                  data: [
                    {x: 198, y: 1}, {x: 247, y: 0}, {x: 367, y: 0}, {x: 602, y: 1}
                  ]
                }, 
{
                  label: 'ChangeMove(Lecture.day)',
                        stepped: true,
                        pointRadius: 0,
                    borderWidth: 1
                  ,
                  data: [
                    {x: 312, y: 0}, {x: 438, y: 0}, {x: 556, y: 1}, {x: 561, y: 1}, {x: 1016, y: 0}
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
                text: 'comp01_LAHC 100_0 picked move type best hard score diff statistic'
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
                        stepSize: 100
                        ,
                        callback: function(value, index) {
                            return humanizeTime(value);
                        }
                },
                suggestedMin: 0,
                suggestedMax: 14589,
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
  chart_pickedMoveTypeBestScoreDiffSubSingleStatisticChart0_e1cb0.resize(1280, 720);
});
window.addEventListener('afterprint', () => {
  chart_pickedMoveTypeBestScoreDiffSubSingleStatisticChart0_e1cb0.resize();
});
