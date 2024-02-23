// API
// All category : - https://openapi.programming-hero.com/api/videos/categories

// ALL data by categoryId
// URL Format: - https://openapi.programming-hero.com/api/videos/category/${id}

// Example: - https://openapi.programming-hero.com/api/videos/category/1000

// Blog Questions
// Discuss the scope of var, let, and const
// Tell us the use cases of null and undefined
// What do you mean by REST API?

//1 catagory

const catagorylist = () => {
  const url = `https://openapi.programming-hero.com/api/videos/categories`;
  const url2 = `https://openapi.programming-hero.com/api/videos/category/1000`;

  fetch(url)
    .then((res) => res.json())
    .then((data) => showcatagory(data.data));
};

const showcatagory = (data) => {
  //   console.log(data);
  const showcatagoryall = document.getElementById("showcatagoryall");

  data.forEach((element) => {
    console.log(element);
    const createlistadd = document.createElement("div");

    createlistadd.innerHTML = `
    <div  class="mt-8"><button  onclick="catagorylist2();"class="btn bg bg-red-600 text-white">${element.category}</button></div>
    
    </div>
   
    
  </div>
  `;
    showcatagoryall.appendChild(createlistadd);
  });
};

//

const catagorylist2 = () => {
  const url = `https://openapi.programming-hero.com/api/videos/category/1000`;
  //   console.log(url);

  fetch(url)
    .then((res) => res.json())
    .then((data) => clickshow(data.data));
};

const clickshow = (clickinfo) => {
  //   console.log(clickinfo);
  const showinformation = document.getElementById("allinfodisplay");
  showinformation.classList = "p-3";
  //

  clickinfo.forEach((element2) => {
    console.log("show", element2);
    const creatediv = document.createElement("div");

    creatediv.innerHTML = `

    <img src="${element2.authors[0].profile_picture}" alt="Shoes" />;
    <div>${element2.authors[0].profile_picture}</div>
  
   

    `;

    showinformation.appendChild(creatediv);
  });
};

//

catagorylist2();
catagorylist();

// 2 add bloge
// Get the button element
var button = document.getElementById("myButton");

// Add a click event listener to the button
button.addEventListener("click", function () {
  // Change the location to the desired page

  window.location.href = "index2.html";
  //   window.location.reload();
});
