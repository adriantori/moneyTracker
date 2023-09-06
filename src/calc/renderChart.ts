import Chart from "chart.js";

let myChart

export function renderChart(arrLabel: string[], arrData: number[]){
    var ctx: HTMLCanvasElement = <HTMLCanvasElement>document.getElementById("myChart");
    let chartData:object = {};
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
    myChart = new Chart(
        ctx,
        chartData
    )

}


