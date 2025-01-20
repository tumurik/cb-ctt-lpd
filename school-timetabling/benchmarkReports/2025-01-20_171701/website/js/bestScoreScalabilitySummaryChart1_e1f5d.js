
var chart_bestScoreScalabilitySummaryChart1_e1f5d = new Chart(document.getElementById('chart_bestScoreScalabilitySummaryChart1_e1f5d'), {
    type: 'line',
    data: {
        datasets: [
            {
                  label: 'Simulated Annealing startingTemperature 1hard20soft (favorite)',
                    borderWidth: 4
,
                  data: [
                    {x: 360843551, y: -6}
                  ]
                }, 
{
                  label: 'Simulated Annealing startingTemperature 1hard70soft',
                    borderWidth: 1
                  ,
                  data: [
                    {x: 360843551, y: -11}
                  ]
                }, 
{
                  label: 'LAHC 100 (favorite)',
                    borderWidth: 4
,
                  data: [
                    {x: 360843551, y: -6}
                  ]
                }, 
{
                  label: 'LAHC 500',
                    borderWidth: 1
                  ,
                  data: [
                    {x: 360843551, y: -9}
                  ]
                }, 
{
                  label: 'Tabu 3 500 (favorite)',
                    borderWidth: 4
,
                  data: [
                    {x: 360843551, y: -6}
                  ]
                }, 
{
                  label: 'Tabu 10 2000',
                    borderWidth: 1
                  ,
                  data: [
                    {x: 360843551, y: -87}
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
                text: 'Best soft score scalability summary (higher is better)'
            },
            tooltip: {
                callbacks: {
                }
            }
        },
        scales: {
            x: {
                title: {
                    display: true,
                    text: 'Problem scale'
                },
                ticks: {
                        stepSize: 10000000
                        
                },
                suggestedMin: 0,
                suggestedMax: 360843551,
                type: 'linear',
                display: true
            },
            y: {
                title: {
                    display: true,
                    text: 'Best soft score'
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
  chart_bestScoreScalabilitySummaryChart1_e1f5d.resize(1280, 720);
});
window.addEventListener('afterprint', () => {
  chart_bestScoreScalabilitySummaryChart1_e1f5d.resize();
});
