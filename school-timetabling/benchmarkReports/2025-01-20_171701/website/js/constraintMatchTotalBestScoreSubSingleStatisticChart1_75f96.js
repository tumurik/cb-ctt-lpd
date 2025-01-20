
var chart_constraintMatchTotalBestScoreSubSingleStatisticChart1_75f96 = new Chart(document.getElementById('chart_constraintMatchTotalBestScoreSubSingleStatisticChart1_75f96'), {
    type: 'line',
    data: {
        datasets: [
            {
                  label: 'Room stability violated weight',
                        stepped: true,
                        pointRadius: 0,
                    borderWidth: 1
                  ,
                  data: [
                    {x: 226, y: -28}, {x: 236, y: -32}, {x: 286, y: -28}, {x: 328, y: -25}, {x: 355, y: -33}, {x: 467, y: -24}, {x: 538, y: -34}, {x: 594, y: -31}, {x: 602, y: -36}, {x: 700, y: -41}, {x: 707, y: -39}, {x: 723, y: -43}, {x: 889, y: -35}, {x: 905, y: -44}, {x: 920, y: -43}, {x: 934, y: -41}, {x: 940, y: -34}, {x: 1242, y: -29}, {x: 1718, y: -27}, {x: 1750, y: -35}, {x: 2367, y: -28}, {x: 3060, y: -26}, {x: 3520, y: -24}, {x: 9683, y: -33}, {x: 9923, y: -34}, {x: 20820, y: -32}, {x: 21092, y: -35}, {x: 23854, y: -28}, {x: 24132, y: -27}, {x: 24371, y: -24}, {x: 27526, y: -27}, {x: 27748, y: -17}, {x: 50877, y: -5}, {x: 60000, y: -5}
                  ]
                }, 
{
                  label: 'Room capacity exceeded weight',
                        stepped: true,
                        pointRadius: 0,
                    borderWidth: 1
                  ,
                  data: [
                    {x: 226, y: -156}, {x: 236, y: -167}, {x: 252, y: -156}, {x: 538, y: -201}, {x: 594, y: -156}, {x: 1750, y: -131}, {x: 9683, y: -193}, {x: 9923, y: -98}, {x: 20820, y: -81}, {x: 20838, y: -56}, {x: 23854, y: -31}, {x: 27526, y: -30}, {x: 27748, y: -6}, {x: 60000, y: -6}
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
                text: 'comp01_Tabu 3 500_0 constraint match total best soft score diff statistic'
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
                    text: 'Constraint match total soft score'
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
  chart_constraintMatchTotalBestScoreSubSingleStatisticChart1_75f96.resize(1280, 720);
});
window.addEventListener('afterprint', () => {
  chart_constraintMatchTotalBestScoreSubSingleStatisticChart1_75f96.resize();
});
