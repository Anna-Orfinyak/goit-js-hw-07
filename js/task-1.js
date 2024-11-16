const categoriesList = document.querySelector('#categories');

const categoryItems = document.querySelectorAll('.item')

const numberOfCategories = categoryItems.length;

console.log(`Number of categories: ${numberOfCategories}`);

categoryItems.forEach(item => {
    const categoryTitle = item.querySelector('h2').textContent;
    const elementNumber = item.querySelectorAll("li").length;

    console.log(`Category Title: ${categoryTitle}`);
    console.log(`Nomber of elements ${elementNumber}`);
});