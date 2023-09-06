var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import { BASE_URL } from "../constants.js";
const api_url = BASE_URL + '/api/v1/transaction';
export default function saveHTML(htmlId) {
    return __awaiter(this, void 0, void 0, function* () {
        const response = yield fetch(api_url, {
            method: 'POST',
            mode: 'cors',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                id: htmlId[0],
                type: htmlId[1],
                name: htmlId[2],
                detail: htmlId[3],
                amount: +htmlId[4]
            })
        }).then(function (response) {
            return response.json;
        }).then(function (data) {
            console.log(data);
        });
        alert("Transaction saved");
        location.reload();
    });
}
