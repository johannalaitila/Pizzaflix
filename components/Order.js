import { setOrderBarEnabled } from "./ViewOrderBar";

var items = [];
var itemPrices = [];
var value = 0;

export function addToOrder(name, price){
    items.push(name);
    itemPrices.push(price)
    value += parseFloat(price)
    setBarVisibility()
}

export function removeFromOrder(){
    setBarVisibility()
}

export function getItemCount(){
    return items.length;
}

export function getItems(){
    return items;
}

export function getOrderValue(){
    return value;
}

function setBarVisibility(){
    if(items.length > 0) setOrderBarEnabled(true);
    else setOrderBarEnabled(false)
}