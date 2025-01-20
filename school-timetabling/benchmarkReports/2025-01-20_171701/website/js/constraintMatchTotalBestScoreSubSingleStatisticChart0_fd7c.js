
var chart_constraintMatchTotalBestScoreSubSingleStatisticChart0_fd7c = new Chart(document.getElementById('chart_constraintMatchTotalBestScoreSubSingleStatisticChart0_fd7c'), {
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
                    {x: 186, y: -9}, {x: 189, y: -8}, {x: 236, y: -5}, {x: 239, y: -4}, {x: 240, y: -3}, {x: 290, y: -5}, {x: 292, y: -4}, {x: 297, y: -5}, {x: 311, y: -6}, {x: 339, y: -5}, {x: 409, y: -4}, {x: 779, y: -3}, {x: 781, y: -2}, {x: 1049, y: -1}, {x: 1408, y: -2}, {x: 1716, y: -1}, {x: 2230, y: 0}, {x: 60000, y: 0}
                  ]
                }, 
{
                  label: 'Curriculum conflict weight',
                        stepped: true,
                        pointRadius: 0,
                    borderWidth: 1
                  ,
                  data: [
                    {x: 236, y: -1}, {x: 239, y: -2}, {x: 240, y: -3}, {x: 290, y: 0}, {x: 292, y: -1}, {x: 311, y: 0}, {x: 409, y: -1}, {x: 576, y: 0}, {x: 779, y: -1}, {x: 1408, y: 0}, {x: 60000, y: 0}
                  ]
                }, 
{
                  label: 'Teacher and course unavailability conflict weight',
                        stepped: true,
                        pointRadius: 0,
                    borderWidth: 1
                  ,
                  data: [
                    {x: 236, y: -1}, {x: 297, y: 0}, {x: 60000, y: 0}
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
                text: 'comp01_LAHC 500_0 constraint match total best hard score diff statistic'
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
  chart_constraintMatchTotalBestScoreSubSingleStatisticChart0_fd7c.resize(1280, 720);
});
window.addEventListener('afterprint', () => {
  chart_constraintMatchTotalBestScoreSubSingleStatisticChart0_fd7c.resize();
});
