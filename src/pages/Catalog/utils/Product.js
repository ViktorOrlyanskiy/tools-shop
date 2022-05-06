export const displayAmount = (amount) => {
    return (amount > 0) ? amount : ''
}

export const checkItemsInCart = (id, goods) => {
    return goods.some(product => product.id === id)
}

export const getSum = (amount, price) => {
    return (amount * +(price.replace(/\D/g, '')));
}

export const getTotalSum = (cart) => {
    let totalSum = cart.goods.reduce((total, product) => total + product.sum, 0)
    return totalSum;
}
