import "./styles.css";
import {
    INPUT_FIELD,
    LIST,
} from './const.js';
import {
    addItemsIfScroll,
    addGroupOfItems,
    updateSearchList,
    outputData,
} from './modules/list.component';

let list = document.querySelector(LIST);
const inputField = document.querySelector(INPUT_FIELD);

list.addEventListener('scroll', addItemsIfScroll);
inputField.addEventListener('keyup', updateSearchList);

addGroupOfItems(outputData.slice(0, 19));