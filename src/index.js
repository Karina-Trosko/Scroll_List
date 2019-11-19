import "./styles.css";
import {
    INPUT_FIELD,
    LIST,
} from './const.js';
import {
    addItemsIfScroll,
    addGroupOfItems,
    updateSearchList,
} from './modules/list.component';
import { data } from './data.js';

let list = document.querySelector(LIST);
const inputField = document.querySelector(INPUT_FIELD);

list.addEventListener('scroll', addItemsIfScroll);
inputField.addEventListener('keyup', updateSearchList);

addGroupOfItems(data.slice(0, 19));