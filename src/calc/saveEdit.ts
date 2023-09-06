import { BASE_URL } from "../constants.js";



export default async function saveEditHTML(htmlId: Array<string|number>){
    console.log("masuk edit");
    const api_url = BASE_URL + '/api/v1/transaction/' + htmlId[0];
    const basket: Array<string|number> = [htmlId[0], htmlId[1], htmlId[2], htmlId[3], htmlId[4]]

    const response = await fetch(api_url, {
        method: 'PUT',
        mode:'cors',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
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
    alert("Update successful");
    location.reload()
}