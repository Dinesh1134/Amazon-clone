const orders = JSON.parse(localStorage.getItem('orders')) || [];

export function addOrder(orderDetails) {
    orders.unshift(orderDetails);
    saveToStorage();
}

function saveToStorage() {
    localStorage.setItem('orders', JSON.stringify(orders));
}

export function generateOrderId() {
    return Math.floor(Math.random() * 1000000); 
}

export function getOrderTime() {
    return new Date().toISOString(); 
}

export function getOrderDetials() {
    return orders;
}

export function getOrder(orderId) {
    let matchingOrder;
    orders.forEach((order) => {
        if (order.id == orderId) {
            matchingOrder = order;
        }
    });
    return matchingOrder;
}

