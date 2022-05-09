export const getGoods = (goods) => {
    const newGoods = [];
    goods.forEach(product => {
        const { name, sum, amount, price } = product;
        const newProduct = {
            name,
            price,
            sum,
            amount,
        };
        newGoods.push(newProduct)
    });
    return newGoods
}