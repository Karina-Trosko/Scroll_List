import {
    INPUT_FIELD,
    LIST,
    LIST_ITEM,
} from '../const.js';
import { data } from '../data.js';
import { getListItem } from './listItem.component';

let list = document.querySelector(LIST);
const inputField = document.querySelector(INPUT_FIELD);
let indexStart = 19;
let indexEnd = 29;
export let outputData = data;

function addItem(value) {

    list.append(getListItem(value));
}

export function addGroupOfItems(arr) {

    arr.forEach(value => addItem(value));
}

export function addItemsIfScroll() {

    if (this.scrollHeight - (this.scrollTop + this.clientHeight) < 5) {

        addGroupOfItems(outputData.slice(indexStart, indexEnd));
        indexStart = indexEnd;
        indexEnd += 10;
        selectResultOfSearch(inputField.value);
    }
}

function selectResultOfSearch(value) {

    list.querySelectorAll(LIST_ITEM).forEach(item => {

        if (!item.innerHTML.includes("span")) {
            item.innerHTML = item.innerHTML.replace(new RegExp(value, 'gi'), '<span class="search-selection">$&</span>');
        }
    });
}

export function updateSearchList({ target: { value } }) {

    if (value != "") {
        let result = data.filter((item) => {
            return item
                .toLowerCase()
                .includes(value.toLowerCase());
        });
        outputData = result;
        updateList();
        selectResultOfSearch(value);
        indexStart = 19;
        indexEnd = 29;

    } else {
        outputData = data;
        updateList();
        indexStart = 19;
        indexEnd = 29;
    }

}

function updateList() {

    list.querySelectorAll(LIST_ITEM).forEach(item => item.remove());
    addGroupOfItems(outputData.slice(0, 19));
}