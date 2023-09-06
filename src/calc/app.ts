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
    
    if(inputName == "kuru" && inputDetails == "kuru"){
        const outputElement = document.getElementById("ulOutput") as HTMLElement;
        outputElement.innerHTML += `
        <li class="border border-primary mt-3 p-3" id="kurukuru">
        <img src="https://kurukuru.morian.icu/e.gif" alt="">
        </li>
        `;
    }else{
        renderHTML(inputType, inputName, inputDetails, inputAmount, lastId);
    }
    
});

