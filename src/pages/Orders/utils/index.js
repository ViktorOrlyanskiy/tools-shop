export const reversSort = (array) => {
    return array.sort((a, b) => (+b.id) - (+a.id))
}