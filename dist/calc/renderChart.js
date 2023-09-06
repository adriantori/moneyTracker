import Chart from "chart.js";
let myChart;
export function renderChart(arrLabel, arrData) {
    var ctx = document.getElementById("myChart");
    let chartData = {};
    chartData = {
        type: 'line',
        data: {
            labels: arrLabel,
            datasets: [{
                    label: 'Cash Total',
                    data: arrData,
                    borderWidth: 1
                }]
        }
    };
    myChart = new Chart(ctx, chartData);
}
