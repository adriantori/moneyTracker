import renderHTML from "./renderHTML.js";
import fetchHTML from "./fetchHTML.js";

const formInput = document.getElementById("formTransaction") as HTMLFormElement;
let lastId: number = 0;
let fetchDataPromise = Promise.resolve(fetchHTML());

fetchHTML()
fetchDataPromise.then(value=>{
    lastId = value;
}).catch(err => {
    console.log(err);
})

formInput?.addEventListener('submit', (event) => {
    event.preventDefault();
    lastId++;
    let inputType: string = (document.getElementById("cashToggle") as HTMLInputElement).value
    let inputName: string = (document.getElementById("name") as HTMLInputElement).value
    let inputDetails: string = (document.getElementById("detail") as HTMLInputElement).value
    let inputAmount: string = (document.getElementById("amount") as HTMLInputElement).value
    
    renderHTML(inputType, inputName, inputDetails, inputAmount, lastId);
});

