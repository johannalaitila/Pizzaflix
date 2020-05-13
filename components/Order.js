var order = [['Vegetariana', 8.50]]

export function getOrder(){
    return order;
}

export function addToOrder(name, price){
    order.push([name, price])
}

export function getNumberOfItemsInOrder(){
    return order.length;
}

export function getOrderTotal(){
    let total = 0.00
    for(let i = 0; i < order.length; i++){
        total += order[i][1]
    }
    return total
}
