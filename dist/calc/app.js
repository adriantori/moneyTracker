import renderHTML from "./renderHTML.js";
import fetchHTML from "./fetchHTML.js";
const formInput = document.getElementById("formTransaction");
let lastId = 0;
let fetchDataPromise = Promise.resolve(fetchHTML());
fetchHTML();
fetchDataPromise.then(value => {
    lastId = value;
}).catch(err => {
    console.log(err);
});
formInput === null || formInput === void 0 ? void 0 : formInput.addEventListener('submit', (event) => {
    event.preventDefault();
    lastId++;
    let inputType = document.getElementById("cashToggle").value;
    let inputName = document.getElementById("name").value;
    let inputDetails = document.getElementById("detail").value;
    let inputAmount = document.getElementById("amount").value;
    renderHTML(inputType, inputName, inputDetails, inputAmount, lastId);
});
