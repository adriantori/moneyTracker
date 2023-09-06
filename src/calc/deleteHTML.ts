import { BASE_URL } from "../constants.js";

async function deleteElement(outputId :number){
    const api_url = BASE_URL + '/api/v1/transaction/' + outputId;
    const elementRemove = document.getElementById(`output-${outputId}`);
    const parentElement = elementRemove?.parentNode;

    let confirmDelete = confirm("Are you sure to delete this data?");
    if(confirmDelete){
        if(parentElement){
            parentElement.removeChild(elementRemove);
        }
        const response = await fetch(api_url, {
            method: 'DELETE',
            mode:'cors',
            headers: {
                'Content-Type': 'application/json',
            }
        }).then(function(response){
            return response.json;
        }).then(function(data){
            console.log(data);
        });
        alert("Transaction deleted");
        location.reload();
    }
}