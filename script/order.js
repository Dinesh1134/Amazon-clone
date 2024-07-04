

const orders = JSON.parse(localStorage.getItem('orders')) || [];

export function addOrder(orderDetails) {
    orders.unshift(orderDetails);
    saveToStorage();
}

function saveToStorage() {
    localStorage.setItem('orders', JSON.stringify(orders));
}

export function generateOrderId() {
    return Math.floor(Math.random() * 1000000); // Larger number for uniqueness
}

export function getOrderTime() {
    return new Date().toISOString(); // ISO string for consistency
}

export function getOrders() {
    return orders;
}