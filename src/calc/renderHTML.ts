import saveHTML from "./saveHTML.js";

export default function renderHTML(types: string, names: string, details: string, amounts: string, counterId: number ){
    const outputElement = document.getElementById("ulOutput") as HTMLElement;
    const amountNumber: number = +amounts;
    outputElement.innerHTML += `
    <tr id=output-${counterId}>
        <td>${counterId}</td>
        <td>${types}</td>
        <td>${names}</td>
        <td>${details}</td>
        <td>${amountNumber.toLocaleString()}</td>
        <td>
        <button type="button" class="btn btn-warning" onclick="editElement('output-${counterId}')">EDIT</button>
        <button type="button" class="btn btn-danger" onclick="deleteElement('output-${counterId}')">DELETE</button>
        </td>
    </tr>
    `;
    let inputs = [counterId,types, names, details, amounts];
    saveHTML(inputs);
}
