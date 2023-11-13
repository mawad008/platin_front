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