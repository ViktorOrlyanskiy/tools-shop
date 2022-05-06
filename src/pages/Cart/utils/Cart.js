export const getGoods = (goods) => {
    const newGoods = [];
    goods.forEach(product => {
        const { name, sum, amount } = product;
        const newProduct = {
            name,
            sum,
            amount,
        };
        newGoods.push(newProduct)
    });
    return newGoods
}