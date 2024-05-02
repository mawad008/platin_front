<template>
    <div class="w-100">
    <!-- <canvas id="myChart"></canvas> !-->
        <!-- <div style="width: 100%; height: 578px">
        <iframe src="https://gold-feed.com/charts/goldfeed29v9234ltlvl234l66l324/chart.php" scrolling="no" height="100%" width="100%" frameborder="0"></iframe>
        </div> -->
        <Chart type="line" class="chart-div-custom" :data="chartData" :options="chartOptions"  />


    </div>
</template>

<script setup>
// import Chart from 'chart.js/auto';
import Chart from 'primevue/chart';

// const Utils = ChartUtils.init();

const chartData = ref();
const chartOptions = ref();

const setChartData = () => {
    const documentStyle = getComputedStyle(document.documentElement);

    return {
        labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul'],
        datasets: [
            {
                label: 'سعر البيع',
                data: [65, 59, 80, 81, 56, 55, 40],
                fill: false,
                borderColor: '#dcba95',
                tension: 0.4
            },
            {
                label: 'سعر الشراء',
                data: [28, 48, 40, 19, 86, 27, 90],
                fill: false,
                borderColor: '#2d3a4a',
                tension: 0.4
            }
        ]
    };
};
const setChartOptions = () => {
    const documentStyle = getComputedStyle(document.documentElement);
    const textColor = documentStyle.getPropertyValue('--text-color');
    const textColorSecondary = documentStyle.getPropertyValue('--text-color-secondary');
    const surfaceBorder = documentStyle.getPropertyValue('--surface-border');

    return {
        maintainAspectRatio: false,
        aspectRatio: 0.6,
        plugins: {
            legend: {
                labels: {
                    color: textColor
                }
            }
        },
        scales: {
            x: {
                ticks: {
                    color: textColorSecondary
                },
                grid: {
                    color: surfaceBorder
                }
            },
            y: {
                ticks: {
                    color: textColorSecondary
                },
                grid: {
                    color: surfaceBorder
                }
            }
        }
    };
}


onMounted(() => {

    chartData.value = setChartData();
    chartOptions.value = setChartOptions();


    //   chartData.value = setChartData();
    //     chartOptions.value = setChartOptions();
    //     var ctx = document.getElementById('myChart').getContext('2d');




    // const labels = ['Label 1', 'Label 2', 'Label 3', 'Label 4', 'Label 5'];
    // const data = {
    //     labels: labels,
    //     datasets: [
    //         {
    //         yAxisID: 'y',
    //         label: 'سعر الشراء',
    //         data: [10, 30, 30, 40, 50],
    //         backgroundColor:'#dcba95',
    //         borderColor:  '#dcba95',
    //         borderWidth: 3,
    //         tension: 0.4,

    //         },
    //         {
    //         yAxisID: 'y1',
    //         label: 'سعر البيع',
    //         data: [56, 50, 89, 20, 60],
    //         backgroundColor:  '#2d3a4a',
    //         borderColor:  '#2d3a4a',
    //         borderWidth: 3,
    //         tension: 0.4,
    //         },

    //        ]
    // };
    // const config = {
    //     type: 'line',
    //     data: data,
    //     options: {
    //         responsive: true,
    //         interaction: {
    //             mode: 'index',
    //             intersect: false,
    //         },
    //         stacked: false,
    //         plugins: {
    //             title: {
    //                 display: true,
    //                 text: 'بورصة الذهب'
    //             }
    //         },
    //         scales: {
    //             y: {
    //                 type: 'linear',
    //                 display: true,
    //                 position: 'left',
    //             },
    //             y1: {
    //                 type: 'linear',
    //                 display: true,
    //                 position: 'right',

    //                 // grid line settings
    //                 grid: {
    //                     drawOnChartArea: false, // only want the grid lines for one axis to show up
    //                 },
    //             },
    //         }
    //     },
    // };






    //     const config = {
    //   type: 'line',
    //   data: data,
    //   options: {
    //     responsive: true,
    //     animations: {
    //       radius: {
    //         duration: 400,
    //         easing: 'linear',
    //         loop: (context) => context.active
    //       }
    //     },
    //     hoverRadius: 12,
    //     hoverBackgroundColor: '#dcba9565',
    //     interaction: {
    //       mode: 'nearest',
    //       intersect: false,
    //       axis: 'x'
    //     },
    //     plugins: {
    //       tooltip: {
    //         // enabled: false
    //       }
    //     },
    //     // scales: {
    //     //             y: {
    //     //                 type: 'linear',
    //     //                 display: true,
    //     //                 position: 'left',
    //     //             },
    //     //             y1: {
    //     //                 type: 'linear',
    //     //                 display: true,
    //     //                 position: 'right',

    //     //                 // grid line settings
    //     //                 grid: {
    //     //                     drawOnChartArea: false, // only want the grid lines for one axis to show up
    //     //                 },
    //     //             },
    //     //         }
    //   },
    // };

    // var myChart = new Chart(ctx, {
    //     type: 'line',
    //     data: {
    //         labels: data.labels,
    //         datasets: data.datasets,
    //     },
    //     options: config.options,

    // });
});

</script>

<style lang="scss" scoped>
#myChart {
    width: 100% !important;
    height: 500px !important;
}

</style>