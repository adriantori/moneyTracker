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
function deleteElement(outputId) {
    return __awaiter(this, void 0, void 0, function* () {
        const api_url = BASE_URL + '/api/v1/transaction/' + outputId;
        const elementRemove = document.getElementById(`output-${outputId}`);
        const parentElement = elementRemove === null || elementRemove === void 0 ? void 0 : elementRemove.parentNode;
        let confirmDelete = confirm("Are you sure to delete this data?");
        if (confirmDelete) {
            if (parentElement) {
                parentElement.removeChild(elementRemove);
            }
            const response = yield fetch(api_url, {
                method: 'DELETE',
                mode: 'cors',
                headers: {
                    'Content-Type': 'application/json',
                }
            }).then(function (response) {
                return response.json;
            }).then(function (data) {
                console.log(data);
            });
            alert("Transaction deleted");
            location.reload();
        }
    });
}
