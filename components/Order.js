var order = []

export function getOrder(){
    return order;
}

export function addToOrder(name, price){
    order.push([name, price])
}

export function getNumberOfItemsInOrder(){
    return order.length;
}
