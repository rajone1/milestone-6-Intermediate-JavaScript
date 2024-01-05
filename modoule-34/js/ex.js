const meal = (getValue) => {
  const url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${getValue} `;

  fetch(url)
    .then((res) => res.json())
    .then((data) => displaymeals(data.meals));
};

const displaymeals = (mealall) => {
  //   console.log(mealall);

  const mealsContainer = document.getElementById("meal-container");
  // refresh previous data data
  mealsContainer.innerHTML = " ";
  mealall.forEach((meal) => {
    console.log(meal);
    const add = document.createElement("div");

    add.classList.add("col");
    add.innerHTML = `
       <div class="col">
   <div class="card">
   <img src="${meal.strMealThumb}" class="card-img-top" alt="..." />
   <div class="card-body">
       <h5 class="card-title">${meal.strMeal} ${meal.strCategory}</h5>
        <p class="card-text">
        This is a longer card with supporting text below as a natural
        
        </p>
   </div>
   </div>
   
   
   
   <button onclick="loadmealdetail2()"
   type="button"
   class="btn btn-primary"
   data-bs-toggle="modal"
   data-bs-target="#mealdetail-modal"
   >
   Launch demo modal
   </button>
   
   </div>
   
   `;
    mealsContainer.appendChild(add);
  });
};

const searchmeals = () => {
  const searchMeal2 = document.getElementById("search-field").value;
  meal(searchMeal2);
};

meal("pasta");
