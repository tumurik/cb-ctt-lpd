
var chart_constraintMatchTotalBestScoreSubSingleStatisticChart0_f1098 = new Chart(document.getElementById('chart_constraintMatchTotalBestScoreSubSingleStatisticChart0_f1098'), {
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
                    {x: 226, y: -11}, {x: 236, y: -10}, {x: 252, y: -8}, {x: 328, y: -7}, {x: 538, y: -6}, {x: 594, y: -5}, {x: 602, y: -4}, {x: 700, y: -3}, {x: 707, y: -1}, {x: 723, y: -2}, {x: 905, y: -1}, {x: 934, y: 0}, {x: 940, y: -1}, {x: 24132, y: 0}, {x: 24371, y: -1}, {x: 50877, y: 0}, {x: 60000, y: 0}
                  ]
                }, 
{
                  label: 'Curriculum conflict weight',
                        stepped: true,
                        pointRadius: 0,
                    borderWidth: 1
                  ,
                  data: [
                    {x: 286, y: -1}, {x: 355, y: 0}, {x: 594, y: -1}, {x: 602, y: 0}, {x: 707, y: -1}, {x: 723, y: 0}, {x: 940, y: -1}, {x: 1718, y: 0}, {x: 2367, y: -1}, {x: 3060, y: -2}, {x: 3520, y: 0}, {x: 20820, y: -1}, {x: 20838, y: 0}, {x: 23854, y: -1}, {x: 24132, y: 0}, {x: 27748, y: -1}, {x: 39655, y: 0}, {x: 50877, y: -1}, {x: 60000, y: -1}
                  ]
                }, 
{
                  label: 'Teacher conflict weight',
                        stepped: true,
                        pointRadius: 0,
                    borderWidth: 1
                  ,
                  data: [
                    {x: 328, y: -1}, {x: 355, y: 0}, {x: 594, y: -1}, {x: 602, y: 0}, {x: 1242, y: -1}, {x: 1718, y: 0}, {x: 60000, y: 0}
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
                text: 'comp01_Tabu 3 500_0 constraint match total best hard score diff statistic'
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
  chart_constraintMatchTotalBestScoreSubSingleStatisticChart0_f1098.resize(1280, 720);
});
window.addEventListener('afterprint', () => {
  chart_constraintMatchTotalBestScoreSubSingleStatisticChart0_f1098.resize();
});
