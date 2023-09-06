import saveEdit from "./saveEdit.js";

const formUpdate = document.getElementById("formTransactionEdit") as HTMLFormElement;


formUpdate?.addEventListener('submit', (event) => {
    event.preventDefault();
    let outputId: string = (document.getElementById('idEdit') as HTMLInputElement).value
    let type: string = (document.getElementById('cashToggleEdit') as HTMLInputElement).value;
    let name: string = (document.getElementById('nameEdit') as HTMLInputElement).value;    
    let detail: string = (document.getElementById('detailEdit') as HTMLInputElement).value;
    let amount: number = +(document.getElementById('amountEdit') as HTMLInputElement).value;
    let inputs = [outputId,type, name, detail, amount];
    saveEdit(inputs);
});