
var chart_bestScoreProblemStatisticChart0_39157 = new Chart(document.getElementById('chart_bestScoreProblemStatisticChart0_39157'), {
    type: 'line',
    data: {
        datasets: [
            {
                  label: 'Simulated Annealing startingTemperature 1hard20soft (favorite)',
                        stepped: true,
                        pointRadius: 0,
                    borderWidth: 4
,
                  data: [
                    {x: 797, y: -10}, {x: 37072, y: -9}, {x: 38470, y: -9}, {x: 38658, y: -8}, {x: 40574, y: -8}, {x: 40736, y: -7}, {x: 41394, y: -7}, {x: 41459, y: -6}, {x: 41503, y: -6}, {x: 41504, y: -5}, {x: 42773, y: -5}, {x: 43231, y: -4}, {x: 43232, y: -4}, {x: 43774, y: -3}, {x: 44223, y: -3}, {x: 44224, y: -2}, {x: 44912, y: -2}, {x: 44933, y: -1}, {x: 47015, y: -1}, {x: 47338, y: 0}, {x: 60000, y: 0}
                  ]
                }, 
{
                  label: 'Simulated Annealing startingTemperature 1hard70soft',
                        stepped: true,
                        pointRadius: 0,
                    borderWidth: 1
                  ,
                  data: [
                    {x: 227, y: -10}, {x: 39122, y: -9}, {x: 39405, y: -9}, {x: 39480, y: -8}, {x: 39811, y: -7}, {x: 41184, y: -6}, {x: 41784, y: -6}, {x: 41787, y: -5}, {x: 42072, y: -5}, {x: 42073, y: -4}, {x: 44065, y: -3}, {x: 44395, y: -3}, {x: 44397, y: -2}, {x: 44730, y: -1}, {x: 45932, y: -1}, {x: 47009, y: 0}, {x: 60000, y: 0}
                  ]
                }, 
{
                  label: 'LAHC 100 (favorite)',
                        stepped: true,
                        pointRadius: 0,
                    borderWidth: 4
,
                  data: [
                    {x: 182, y: -10}, {x: 185, y: -9}, {x: 188, y: -8}, {x: 198, y: -7}, {x: 212, y: -6}, {x: 248, y: -6}, {x: 256, y: -5}, {x: 270, y: -4}, {x: 327, y: -4}, {x: 348, y: -3}, {x: 512, y: -3}, {x: 556, y: -2}, {x: 561, y: -1}, {x: 602, y: 0}, {x: 60000, y: 0}
                  ]
                }, 
{
                  label: 'LAHC 500',
                        stepped: true,
                        pointRadius: 0,
                    borderWidth: 1
                  ,
                  data: [
                    {x: 183, y: -10}, {x: 186, y: -9}, {x: 189, y: -8}, {x: 236, y: -7}, {x: 240, y: -7}, {x: 290, y: -6}, {x: 338, y: -6}, {x: 339, y: -5}, {x: 571, y: -5}, {x: 576, y: -4}, {x: 779, y: -4}, {x: 781, y: -3}, {x: 839, y: -3}, {x: 1049, y: -2}, {x: 1686, y: -2}, {x: 1716, y: -1}, {x: 2018, y: -1}, {x: 2230, y: 0}, {x: 60000, y: 0}
                  ]
                }, 
{
                  label: 'Tabu 3 500 (favorite)',
                        stepped: true,
                        pointRadius: 0,
                    borderWidth: 4
,
                  data: [
                    {x: 213, y: -10}, {x: 226, y: -9}, {x: 236, y: -8}, {x: 252, y: -7}, {x: 286, y: -7}, {x: 328, y: -6}, {x: 355, y: -6}, {x: 467, y: -5}, {x: 538, y: -4}, {x: 594, y: -3}, {x: 602, y: -2}, {x: 700, y: -1}, {x: 723, y: -1}, {x: 889, y: 0}, {x: 60000, y: 0}
                  ]
                }, 
{
                  label: 'Tabu 10 2000',
                        stepped: true,
                        pointRadius: 0,
                    borderWidth: 1
                  ,
                  data: [
                    {x: 195, y: -10}, {x: 217, y: -9}, {x: 238, y: -8}, {x: 258, y: -7}, {x: 334, y: -6}, {x: 491, y: -6}, {x: 911, y: -5}, {x: 977, y: -5}, {x: 1238, y: -4}, {x: 1987, y: -3}, {x: 2111, y: -3}, {x: 2361, y: -2}, {x: 2815, y: -1}, {x: 3081, y: -1}, {x: 3121, y: 0}, {x: 60000, y: 0}
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
                text: 'comp01 best hard score statistic'
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
                    text: 'Best hard score'
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
  chart_bestScoreProblemStatisticChart0_39157.resize(1280, 720);
});
window.addEventListener('afterprint', () => {
  chart_bestScoreProblemStatisticChart0_39157.resize();
});
