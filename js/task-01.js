const ulCategoriesEl = document.querySelector('#categories');
const itemsCategoriesEl = document.querySelectorAll('.item');
console.log(`Number of categories: ${ulCategoriesEl.childElementCount}`)
for (let item of itemsCategoriesEl) {
    console.log("Category:", item.firstElementChild.textContent);
    console.log("Elements:", item.lastElementChild.childElementCount);
  }
