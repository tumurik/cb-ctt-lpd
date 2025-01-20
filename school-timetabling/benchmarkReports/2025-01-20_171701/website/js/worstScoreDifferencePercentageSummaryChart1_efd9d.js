
var chart_worstScoreDifferencePercentageSummaryChart1_efd9d = new Chart(document.getElementById('chart_worstScoreDifferencePercentageSummaryChart1_efd9d'), {
    type: 'bar',
    data: {
        labels: [
            'comp01'
        ],
        datasets: [
            {
                  label: 'Simulated Annealing startingTemperature 1hard20soft (favorite)',
                  grouped: true,
                    borderWidth: 4
,
                  data: [
                    93.10344827586206
                  ]
                }, 
{
                  label: 'Simulated Annealing startingTemperature 1hard70soft',
                  grouped: true,
                    borderWidth: 1
                  ,
                  data: [
                    87.35632183908046
                  ]
                }, 
{
                  label: 'LAHC 100 (favorite)',
                  grouped: true,
                    borderWidth: 4
,
                  data: [
                    93.10344827586206
                  ]
                }, 
{
                  label: 'LAHC 500',
                  grouped: true,
                    borderWidth: 1
                  ,
                  data: [
                    89.65517241379311
                  ]
                }, 
{
                  label: 'Tabu 3 500 (favorite)',
                  grouped: true,
                    borderWidth: 4
,
                  data: [
                    93.10344827586206
                  ]
                }, 
{
                  label: 'Tabu 10 2000',
                  grouped: true,
                    borderWidth: 1
                  ,
                  data: [
                    0
                  ]
                }
        ]
    },
    options: {
        animation: false,
        responsive: true,
        maintainAspectRatio: false,
        resizeDelay: 100,
        spanGaps: true,
        plugins: {
            title: {
                display: true,
                text: 'Worst soft score difference percentage summary (higher is better)'
            }
        },
        scales: {
            x: {
                display: true
            },
            y: {
                title: {
                    display: true,
                    text: 'Worst soft score difference percentage'
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
  chart_worstScoreDifferencePercentageSummaryChart1_efd9d.resize(1280, 720);
});
window.addEventListener('afterprint', () => {
  chart_worstScoreDifferencePercentageSummaryChart1_efd9d.resize();
});