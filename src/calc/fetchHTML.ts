import { renderChart } from "./renderChart.js";
import { BASE_URL } from "../constants.js";

const api_url = BASE_URL + '/api/v1/transaction';

export default async function fetchHTML() {
    const response = await fetch(api_url, { method: 'GET' });
    const data = await response.json();
    if (data.length !== 0) {
        const lastId = data[Object.keys(data)[Object.keys(data).length - 1]].id;
        const formOutput = document.getElementById("ulOutput") as HTMLElement
        let totalCash: number = 0;
        let arrAmount: number[] = [];
        let arrLabels: string[] = [];

        for (let i: number = 0; i < data.length; i++) {
            formOutput.innerHTML += `
                    <tr id=output-${data[i].id}>
                        <td>${data[i].id}</td>
                        <td>${data[i].type}</td>
                        <td>${data[i].name}</td>
                        <td>${data[i].detail}</td>
                        <td>${data[i].amount}</td>
                        <td>
                        <button type="button" class="btn btn-warning" onclick="editElement('${data[i].id}')">EDIT</button>
                        <button type="button" class="btn btn-danger" onclick="deleteElement('${data[i].id}')">DELETE</button>
                        </td>
                    </tr>
                        `;

            arrLabels.push(data[i].type)
            if (data[i].type.toLowerCase() == "cash in") {
                totalCash += +data[i].amount
            } else if (data[i].type.toLowerCase() == "cash out") {
                totalCash -= +data[i].amount
            }
            arrAmount.push(totalCash);
        }
        renderChart(arrLabels, arrAmount);
        return lastId;
    } else {
        return 0;
    }
}