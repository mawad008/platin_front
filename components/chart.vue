<template>
    <div>
        <canvas id="myChart"></canvas>
    </div>
</template>

<script setup>
import Chart from 'chart.js/auto';
// const Utils = ChartUtils.init();

onMounted(() => {

    var ctx = document.getElementById('myChart').getContext('2d');
    const initProgress = document.getElementById('initialProgress');
    const progress = document.getElementById('animationProgress');

   const actions = [
        {
            name: 'Randomize',
            handler(chart) {
                chart.data.datasets.forEach(dataset => {
                    dataset.data = { count: chart.data.labels.length, min: -100, max: 100 };
                });
                chart.update();
            }
        },
    ];

    const labels = ['Label 1', 'Label 2', 'Label 3', 'Label 4', 'Label 5'];
    const data = {
        labels: labels,
        datasets: [
            {
            yAxisID: 'y',
            label: 'Dataset 1',
            data: [10, 20, 30, 40, 50],
            backgroundColor:'rgba(255, 99, 132, 0.5)',
            borderColor:  'rgba(54, 162, 235, 1)',
            borderWidth: 1
            },
            {
            yAxisID: 'y1',
            label: 'Dataset 2',
            data: [56, 50, 89, 20, 60],
            backgroundColor:  'rgba(75, 192, 192, 0.5)',
            borderColor:  'rgba(153, 102, 255, 1)',
            borderWidth: 1
            },
           
           ]
    };
    const config = {
        type: 'line',
        data: data,
        options: {
            responsive: true,
            interaction: {
                mode: 'index',
                intersect: false,
            },
            stacked: false,
            plugins: {
                title: {
                    display: true,
                    text: 'Chart.js Line Chart - Multi Axis'
                }
            },
            scales: {
                y: {
                    type: 'linear',
                    display: true,
                    position: 'left',
                },
                y1: {
                    type: 'linear',
                    display: true,
                    position: 'right',

                    // grid line settings
                    grid: {
                        drawOnChartArea: false, // only want the grid lines for one axis to show up
                    },
                },
            }
        },
    };
    var myChart = new Chart(ctx, {
        type: 'line',
        data: {
            labels: data.labels,
            datasets: data.datasets,
        },
        options: config.options,
        actions: [
            {
                name: 'Randomize',
                handler(chart) {
                    chart.data.datasets.forEach(dataset => {
                        dataset.data = { count: chart.data.labels.length, min: -100, max: 100 };
                    });
                    chart.update();
                }
            },
        ]
    });
});

</script>

<style lang="scss" scoped></style>