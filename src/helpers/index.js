
// добавляет разрядность в число
export const displayTotalSum = (num) => {
    let str = String(num);
    str = [...str].reverse().join('');
    str = str.replace(/(\d{3})/g, '$1 ');
    str = [...str].reverse().join('') + ' ₽';
    return str
}
