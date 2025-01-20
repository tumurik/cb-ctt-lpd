
var chart_pickedMoveTypeBestScoreDiffSubSingleStatisticChart1_e3fd1 = new Chart(document.getElementById('chart_pickedMoveTypeBestScoreDiffSubSingleStatisticChart1_e3fd1'), {
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
                    {x: 217, y: 0}, {x: 258, y: 0}, {x: 911, y: -1}, {x: 2815, y: -4}, {x: 3121, y: 0}
                  ]
                }, 
{
                  label: 'ChangeMove(Lecture.room)',
                        stepped: true,
                        pointRadius: 0,
                    borderWidth: 1
                  ,
                  data: [
                    {x: 334, y: -5}, {x: 366, y: 5}, {x: 401, y: 3}, {x: 491, y: 22}, {x: 977, y: 1}, {x: 1987, y: -5}, {x: 2111, y: 1}, {x: 2895, y: 1}, {x: 2957, y: 2}, {x: 3018, y: 1}, {x: 3081, y: 3}, {x: 10795, y: 1}, {x: 12932, y: 12}, {x: 13094, y: 5}, {x: 13259, y: 3}, {x: 13336, y: 1}, {x: 18693, y: 16}, {x: 18856, y: 3}, {x: 19013, y: 3}, {x: 33919, y: 4}, {x: 35236, y: 1}, {x: 36301, y: 16}, {x: 36379, y: 5}, {x: 36455, y: 3}
                  ]
                }, 
{
                  label: 'ChangeMove(Lecture.period)',
                        stepped: true,
                        pointRadius: 0,
                    borderWidth: 1
                  ,
                  data: [
                    {x: 1238, y: 0}, {x: 2361, y: 0}
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
                text: 'comp01_Tabu 10 2000_0 picked move type best soft score diff statistic'
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
                suggestedMax: 36455,
                type: 'linear',
                display: true
            },
            y: {
                title: {
                    display: true,
                    text: 'Best soft score diff'
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
  chart_pickedMoveTypeBestScoreDiffSubSingleStatisticChart1_e3fd1.resize(1280, 720);
});
window.addEventListener('afterprint', () => {
  chart_pickedMoveTypeBestScoreDiffSubSingleStatisticChart1_e3fd1.resize();
});
