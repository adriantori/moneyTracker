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
import login from "./login.js";
const api_url = BASE_URL + '/api/v1/register';
export default function register(username, password) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const response = yield fetch(api_url, {
                method: 'POST',
                mode: 'cors',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    username: username,
                    password: password,
                }),
            });
            const data = yield response.json();
            alert(data.message);
            if (response.ok) {
                login(username, password);
            }
        }
        catch (error) {
            console.log('Errors', error);
            alert('DB error occurred');
        }
    });
}
