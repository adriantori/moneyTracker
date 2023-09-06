import saveEdit from "./saveEdit.js";
const formUpdate = document.getElementById("formTransactionEdit");
formUpdate === null || formUpdate === void 0 ? void 0 : formUpdate.addEventListener('submit', (event) => {
    event.preventDefault();
    let outputId = document.getElementById('idEdit').value;
    let type = document.getElementById('cashToggleEdit').value;
    let name = document.getElementById('nameEdit').value;
    let detail = document.getElementById('detailEdit').value;
    let amount = +document.getElementById('amountEdit').value;
    let inputs = [outputId, type, name, detail, amount];
    saveEdit(inputs);
});
