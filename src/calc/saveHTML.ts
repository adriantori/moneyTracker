import { BASE_URL } from "../constants.js";

const api_url = BASE_URL + '/api/v1/transaction';

export default async function saveHTML(htmlId: Array<string|number>){
    const response = await fetch(api_url, {
        method: 'POST',
        mode:'cors',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            id:htmlId[0],
            type:htmlId[1],
            name:htmlId[2],
            detail:htmlId[3],
            amount:+htmlId[4]
        })
    }).then(function(response){
        return response.json;
    }).then(function(data){
        console.log(data);
    });
    alert("Transaction saved");
    location.reload();
}