
var chart_constraintMatchTotalBestScoreSubSingleStatisticChart1_b6a20 = new Chart(document.getElementById('chart_constraintMatchTotalBestScoreSubSingleStatisticChart1_b6a20'), {
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
                    {x: 217, y: -28}, {x: 366, y: -33}, {x: 491, y: -25}, {x: 911, y: -29}, {x: 1238, y: -34}, {x: 2361, y: -35}, {x: 2815, y: -36}, {x: 2957, y: -35}, {x: 3018, y: -33}, {x: 3081, y: -37}, {x: 3121, y: -29}, {x: 10795, y: -36}, {x: 12932, y: -41}, {x: 13259, y: -43}, {x: 13336, y: -33}, {x: 18693, y: -42}, {x: 18856, y: -41}, {x: 19013, y: -38}, {x: 33919, y: -36}, {x: 36301, y: -38}, {x: 36379, y: -39}, {x: 36455, y: -34}, {x: 60000, y: -34}
                  ]
                }, 
{
                  label: 'Room capacity exceeded weight',
                        stepped: true,
                        pointRadius: 0,
                    borderWidth: 1
                  ,
                  data: [
                    {x: 217, y: -156}, {x: 401, y: -201}, {x: 491, y: -156}, {x: 911, y: -131}, {x: 1238, y: -166}, {x: 1987, y: -131}, {x: 2111, y: -166}, {x: 2361, y: -177}, {x: 2815, y: -131}, {x: 3081, y: -176}, {x: 3121, y: -131}, {x: 12932, y: -106}, {x: 13259, y: -151}, {x: 13336, y: -106}, {x: 18693, y: -81}, {x: 18856, y: -127}, {x: 19013, y: -81}, {x: 36379, y: -56}, {x: 60000, y: -56}
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
                text: 'comp01_Tabu 10 2000_0 constraint match total best soft score diff statistic'
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
  chart_constraintMatchTotalBestScoreSubSingleStatisticChart1_b6a20.resize(1280, 720);
});
window.addEventListener('afterprint', () => {
  chart_constraintMatchTotalBestScoreSubSingleStatisticChart1_b6a20.resize();
});
