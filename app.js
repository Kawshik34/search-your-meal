const url = "https://www.themealdb.com/api/json/v1/1/categories.php  ";

let categoryId = document.getElementById("category");
fetch(url)
  .then((response) => response.json())
  .then((data) => getAllData(data));

function getAllData(data) {
  data.categories.forEach((item) => {
    console.log(item);
    let id = item.idCategory;
    let name = item.strCategory;
    let div = document.createElement("div");
    div.className = "col-md-3";
    div.onclick = getDetails;

    let card = `
          <div class="card">
              <img src=${item.strCategoryThumb}  class="card-img-top">
              <h6 class="card-title">${item.strCategory}</h6>
          </div>
  `;
    div.innerHTML = card;
    categoryId.appendChild(div);

    //////
    function getDetails() {
      let div = document.createElement("div");
      let innerSec = `
                <img src=${item.strCategoryThumb}>
                <h1>${item.strCategory}</h1>
                <h6>${item.strCategoryDescription}</h6>
        `;
      div.innerHTML = innerSec;
      categoryId.appendChild(div);
    }
  });
}
