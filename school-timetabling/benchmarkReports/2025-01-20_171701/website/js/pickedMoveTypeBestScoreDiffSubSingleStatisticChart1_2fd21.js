
var chart_pickedMoveTypeBestScoreDiffSubSingleStatisticChart1_2fd21 = new Chart(document.getElementById('chart_pickedMoveTypeBestScoreDiffSubSingleStatisticChart1_2fd21'), {
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
                    {x: 226, y: 0}, {x: 594, y: 0}
                  ]
                }, 
{
                  label: 'ChangeMove(Lecture.room)',
                        stepped: true,
                        pointRadius: 0,
                    borderWidth: 1
                  ,
                  data: [
                    {x: 286, y: 3}, {x: 328, y: -4}, {x: 355, y: 5}, {x: 467, y: -5}, {x: 538, y: -2}, {x: 602, y: -4}, {x: 700, y: -4}, {x: 707, y: 1}, {x: 723, y: 1}, {x: 889, y: -2}, {x: 905, y: 1}, {x: 920, y: 1}, {x: 934, y: 3}, {x: 940, y: 5}, {x: 1242, y: 2}, {x: 1718, y: 22}, {x: 1750, y: 2}, {x: 3060, y: 2}, {x: 3520, y: 4}, {x: 6386, y: 21}, {x: 9683, y: 21}, {x: 9923, y: 2}, {x: 20820, y: 19}, {x: 20838, y: 2}, {x: 21092, y: 1}, {x: 23759, y: 26}, {x: 23854, y: 1}, {x: 24132, y: 3}, {x: 24371, y: 2}, {x: 27526, y: 30}, {x: 27748, y: 5}, {x: 39655, y: 7}, {x: 50877, y: 5}
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
                text: 'comp01_Tabu 3 500_0 picked move type best soft score diff statistic'
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
                    text: 'Best soft score diff'
                },
                ticks: {
                        stepSize: 1
                        
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
  chart_pickedMoveTypeBestScoreDiffSubSingleStatisticChart1_2fd21.resize(1280, 720);
});
window.addEventListener('afterprint', () => {
  chart_pickedMoveTypeBestScoreDiffSubSingleStatisticChart1_2fd21.resize();
});
