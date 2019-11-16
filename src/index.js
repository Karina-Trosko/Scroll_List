import "./styles.css";
import {
    INPUT_FIELD,
    LIST,
    LIST_ITEM,
} from './const.js';
import { data } from './data.js';
import { getListItem } from './modules/listItem.component';
let list = document.querySelector(LIST);
const inputField = document.querySelector(INPUT_FIELD);
let outputData = data;
let indexStart = 19;
let indexEnd = 29;

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
        indexStart = indexEnd;
        indexEnd += 10;
        selectResultOfSearch();
    }
}

function updateList() {
    list.querySelectorAll(LIST_ITEM).forEach(item => {
        item.remove();
    });
    addGroupOfItems(outputData.slice(0, 19));
}

function selectResultOfSearch() {
    list.querySelectorAll(LIST_ITEM).forEach(item => {
        if (!item.innerHTML.includes("span")) {
            item.innerHTML = item.innerHTML.replace(new RegExp(inputField.value, 'gi'), '<span class="search-selection">$&</span>');
        }
    });
}

function updateSearchList() {
    if (inputField.value != "") {
        let result = data.filter((item) => {
            return item
                .toLowerCase()
                .includes(inputField.value.toLowerCase());
        });

        if (result.length === 0) {
            outputData = data;
            updateList();
            return;
        }
        if (result.length !== 0) {
            outputData = result;
            updateList();
            selectResultOfSearch();
            indexStart = 19;
            indexEnd = 29;
        }
    } else {
        outputData = data;
        updateList();
        indexStart = 19;
        indexEnd = 29;
    }
}
list.addEventListener('scroll', addItemsIfScroll);
inputField.addEventListener('keyup', updateSearchList);
addGroupOfItems(outputData.slice(0, 19));