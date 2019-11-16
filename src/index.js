import "./styles.css";
import {
    INPUT_FIELD,
    LIST,
} from './const.js';
import { data } from './data.js';
import { getListItem } from './modules/listItem.component';
const list = document.querySelector(LIST);
//const inputField = document.querySelector(INPUT_FIELD);
let outputData = data;
let indexStart = 0;
let indexEnd = 19;

// function search() {
//     outputData = data.filter((item) => {
//         item
//             .toLowerCase()
//             .includes(inputField.value);
//     });
// }

function addItem(value) {
    const listItem = getListItem(value);
    list.append(listItem);
}

function addGroupOfItems(arr) {
    arr.forEach((value) => { addItem(value); });
}

function addItemsIfScroll() {
    if (this.scrollHeight - (this.scrollTop + this.clientHeight) < 5) {

        addGroupOfItems(outputData.slice(indexStart, indexEnd));
        indexStart += 10;
        indexEnd += 10;
    }

}

list.addEventListener('scroll', addItemsIfScroll);
//inputField.addEventListener('keydown', search);
addGroupOfItems(outputData.slice(indexStart, indexEnd));