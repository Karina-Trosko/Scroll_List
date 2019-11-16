import {
    LIST_ITEM,
    INPUT_FIELD,
} from '../const.js';
export function getListItem(value) {
    const templateItem = `<div class="list-item">${value}</div>`;
    return new DOMParser()
        .parseFromString(templateItem, "text/html")
        .querySelector(LIST_ITEM);
}