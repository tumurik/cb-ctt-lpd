
var chart_bestScoreDistributionSummaryChart1_dec45 = new Chart(document.getElementById('chart_bestScoreDistributionSummaryChart1_dec45'), {
    type: 'boxplot',
    data: {
        labels: [
            'comp01'
        ],
        datasets: [
                {
                    label: 'Simulated Annealing startingTemperature 1hard20soft (favorite)',
                        borderWidth: 4
,
                    data: [
                                {
                                    min: -6,
                                    max: -6,
                                    q1: -6,
                                    q3: -6,
                                    median: -6,
                                    mean: -6,
                                    items: [],
                                    outliers: [],
                                }
                            
                    ]
                }, 
                {
                    label: 'Simulated Annealing startingTemperature 1hard70soft',
                        borderWidth: 1
                    ,
                    data: [
                                {
                                    min: -11,
                                    max: -11,
                                    q1: -11,
                                    q3: -11,
                                    median: -11,
                                    mean: -11,
                                    items: [],
                                    outliers: [],
                                }
                            
                    ]
                }, 
                {
                    label: 'LAHC 100 (favorite)',
                        borderWidth: 4
,
                    data: [
                                {
                                    min: -6,
                                    max: -6,
                                    q1: -6,
                                    q3: -6,
                                    median: -6,
                                    mean: -6,
                                    items: [],
                                    outliers: [],
                                }
                            
                    ]
                }, 
                {
                    label: 'LAHC 500',
                        borderWidth: 1
                    ,
                    data: [
                                {
                                    min: -9,
                                    max: -9,
                                    q1: -9,
                                    q3: -9,
                                    median: -9,
                                    mean: -9,
                                    items: [],
                                    outliers: [],
                                }
                            
                    ]
                }, 
                {
                    label: 'Tabu 3 500 (favorite)',
                        borderWidth: 4
,
                    data: [
                                {
                                    min: -6,
                                    max: -6,
                                    q1: -6,
                                    q3: -6,
                                    median: -6,
                                    mean: -6,
                                    items: [],
                                    outliers: [],
                                }
                            
                    ]
                }, 
                {
                    label: 'Tabu 10 2000',
                        borderWidth: 1
                    ,
                    data: [
                                {
                                    min: -87,
                                    max: -87,
                                    q1: -87,
                                    q3: -87,
                                    median: -87,
                                    mean: -87,
                                    items: [],
                                    outliers: [],
                                }
                            
                    ]
                }
        ]
    },
    options: {
        animation: false,
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
            title: {
                display: true,
                text: 'Best soft score distribution summary (higher is better)'
            }
        },
        scales: {
            x: {
                display: true
            },
            y: {
                title: {
                    display: true,
                    text: 'Best soft score'
                },
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
  chart_bestScoreDistributionSummaryChart1_dec45.resize(1280, 720);
});
window.addEventListener('afterprint', () => {
  chart_bestScoreDistributionSummaryChart1_dec45.resize();
});