const loadmeal = (searchmeallist) => {
  const url = `https://www.themealdb.com/api/json/v1/1/search.php?s= ${searchmeallist}`;
  console.log(url);
  fetch(url)
    .then((resp) => resp.json())

    .then((data) => displaymeals(data.meals));
  // .then((data) => console.log(data.meals));
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
// search code
const searchmeals = () => {
  const mealsearch = document.getElementById("search-field").value;
  // console.log(mealsearch);
  loadmeal(mealsearch);
};
//2. step 3 use modal

const loadmealdetail = (idmeal) => {
  const url = "https://www.themealdb.com/api/json/v1/1/lookup.php?i=52772";

  fetch(url)
    .then((resp) => resp.json())
    .then((data) => displaymealdetails(data.meals[0]))

    // its show error
    .catch((error) => {
      console.log(error);
    });
};

// altarnate importent
// async await

const loadmealdetail2 = async (idmeal) => {
  const url = "https://www.themealdb.com/api/json/v1/1/lookup.php?i=52772";

  try {
    const res = await fetch(url);
    const data = await res.json();
    // console.log(data.meals[0]);
    displaymealdetails(data.meals[0]);
  } catch (error) {
    console.log(error);
  }
};

//

const displaymealdetails = (meal) => {
  document.getElementById("mealdetailsLabel").innerText = meal.strMeal;

  const mealdetailsimg = document.getElementById("mealdetailsimg");

  mealdetailsimg.innerHTML = `
  
  <img class="img-fluid" src="${meal.strMealThumb}">
  
  
  
  `;
};

loadmeal("rice");
