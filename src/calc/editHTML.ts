import bootstrap from "bootstrap"

import { BASE_URL } from "../constants.js";

async function editElement(outputId :string){
    const api_url = BASE_URL + '/api/v1/transaction/' + outputId;
    
    const response = await fetch(api_url,{method:'GET'});
    const data = await response.json();

    (document.getElementById('idEdit') as HTMLInputElement).value = data.id;
    (document.getElementById('cashToggleEdit') as HTMLInputElement).value = data.type;
    (document.getElementById('nameEdit') as HTMLInputElement).value = data.name;
    (document.getElementById('detailEdit') as HTMLInputElement).value = data.detail;
    (document.getElementById('amountEdit') as HTMLInputElement).value = data.amount;
    //get bootstrap 5 modal
    let myModal = new bootstrap.Modal(document.getElementById('modalEditTransaction')!);
    myModal.show();
}