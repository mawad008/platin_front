<template>
    <div class="w-100">
        <canvas width="100%" id="myChart"></canvas>
        <!-- <Chart type="bar" :data="chartData" :options="chartOptions" /> -->

    </div>
</template>

<script setup>
import Chart from 'chart.js/auto';
// import Chart from 'primevue/chart';

// const Utils = ChartUtils.init();

const chartData = ref();
const chartOptions = ref();

const setChartData = () => {
    return {
        labels: ['Q1', 'Q2', 'Q3', 'Q4'],
        datasets: [
            {
                label: 'Sales',
                data: [540, 325, 702, 620],
                backgroundColor: ['rgba(255, 159, 64, 0.2)', 'rgba(75, 192, 192, 0.2)', 'rgba(54, 162, 235, 0.2)', 'rgba(153, 102, 255, 0.2)'],
                borderColor: ['rgb(255, 159, 64)', 'rgb(75, 192, 192)', 'rgb(54, 162, 235)', 'rgb(153, 102, 255)'],
                borderWidth: 1
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
                beginAtZero: true,
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
  // chartData.value = setChartData();
  //   chartOptions.value = setChartOptions();
    var ctx = document.getElementById('myChart').getContext('2d');




    const labels = ['Label 1', 'Label 2', 'Label 3', 'Label 4', 'Label 5'];
    const data = {
        labels: labels,
        datasets: [
            {
            yAxisID: 'y',
            label: 'سعر الشراء',
            data: [10, 30, 30, 40, 50],
            backgroundColor:'#dcba95',
            borderColor:  '#dcba95',
            borderWidth: 3,
            tension: 0.4,

            },
            {
            yAxisID: 'y1',
            label: 'سعر البيع',
            data: [56, 50, 89, 20, 60],
            backgroundColor:  '#2d3a4a',
            borderColor:  '#2d3a4a',
            borderWidth: 3,
            tension: 0.4,
            },
           
           ]
    };
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
      
    const config = {
  type: 'line',
  data: data,
  options: {
    responsive: true,
    animations: {
      radius: {
        duration: 400,
        easing: 'linear',
        loop: (context) => context.active
      }
    },
    hoverRadius: 12,
    hoverBackgroundColor: '#dcba9565',
    interaction: {
      mode: 'nearest',
      intersect: false,
      axis: 'x'
    },
    plugins: {
      tooltip: {
        // enabled: false
      }
    },
    // scales: {
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
  },
};

    var myChart = new Chart(ctx, {
        type: 'line',
        data: {
            labels: data.labels,
            datasets: data.datasets,
        },
        options: config.options,
      
    });
});

</script>

<style lang="scss" scoped></style>