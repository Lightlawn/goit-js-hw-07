const categoriesEl = document.querySelector('#categories');
const categories = categoriesEl.children;

const countCategories = () => {
    return `В списке ${categories.length} категории.`;
};

console.log(countCategories());


const itemAllEl = document.querySelectorAll('.item');
itemAllEl.forEach(itemEl => {
    const itemName = itemEl.firstElementChild.textContent;
    const elementCount = itemEl.lastElementChild.children;
    console.log(`Категория: ${itemName}, Количество элементов: ${elementCount.length}`)
});
