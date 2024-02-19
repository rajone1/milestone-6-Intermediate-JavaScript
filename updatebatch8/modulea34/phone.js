// URL Format: https://openapi.programming-hero.com/api/phones?search=${searchText}

// Example: https://openapi.programming-hero.com/api/phones?search=iphone

// Phone detail url:
// URL Format: https://openapi.programming-hero.com/api/phone/${id}

// Example: https://openapi.programming-hero.com/api/phone/apple_iphone_13_pro_max-11089

// const url = " https://openapi.programming-hero.com/api/phones?search=iphone";

// const loadphone = () => {
//   fetch(url)
//     .then((res) => res.json())
//     .then((data) => displayphone(data.data));
// };

// loadphone();

const loadphone2 = async (searchtext) => {
  const url = `https://openapi.programming-hero.com/api/phones?search=${searchtext}`;
  const res = await fetch(url);
  const data = await res.json();
  const result = data.data;
  displayphone(result);
};

const displayphone = (phones) => {
  console.log(phones);
  // step1
  const phoneContainer = document.getElementById("phone-container");
  // clear phone container
  phoneContainer.textContent = "";

  // show all button add

  const showall = document.getElementById("load");

  if (phones.length > 10) {
    showall.classList.remove("hidden");
  } else {
    showall.classList.add("hidden");
  }

  phones = phones.slice(0, 10);

  phones.forEach((element) => {
    //     console.log(element);

    // step2

    const creategrid = document.createElement("div");
    creategrid.classList = "card p-4 bg-base-100 shadow-xl";

    // step3
    creategrid.innerHTML = ` <figure>
<img
  src="${element.image}"
  alt="Shoes"
/>
</figure>
<div class="card-body">
<h2 class="card-title">${element.brand}</h2>
<p>If a dog chews shoes whose shoes does he choose?</p>
<div class="card-actions justify-center m-4">
  <button onclick = "showmodal('${element.slug}')" class="btn btn-primary">show details</button>
</div>
</div>`;
    // step4
    phoneContainer.appendChild(creategrid);
  });

  loaderadd(false);
};

// search phone

const searchphone = () => {
  // console.log("hello");
  loaderadd(true);
  const searchinput = document.getElementById("search-input");
  // add enter key search

  const searchinput2 = searchinput.value;
  // console.log(searchinput2);
  loadphone2(searchinput2);
};

// add loader or spinner

const loaderadd = (isTrue) => {
  const load = document.getElementById("loader");
  if (isTrue) {
    load.classList.remove("hidden");
  } else {
    load.classList.add("hidden");
  }
};

// show details info

const showmodal = async (id) => {
  console.log("phone id:", id);
  const url2 = `https://openapi.programming-hero.com/api/phone/${id}`;

  const res = await fetch(url2);

  const data = await res.json();
  // console.log(data);
  const allinfo = data.data;
  showmodalinfo(allinfo);
};

const showmodalinfo = (data) => {
  const phone_details_info = document.getElementById("phone-details-info");

  phone_details_info.innerText = data.name;

  const use_slug = document.getElementById("use_slug");

  use_slug.innerText = data.slug;

  // add inner html

  const add_all_info = document.getElementById("add_all_info");

  add_all_info.innerHTML = `
  
  <img src="${data.image}" alt="">
  <h2><span>storage:</span> ${data.mainFeatures.storage}</h2>

  <h2><span>releaseDate:</span>${data?.releaseDate || "no release date"}</h2>
  <h2><span>other:</span>${data.mainFeatures.memory}</h2>
 
  `;

  show_modal.showModal();
  console.log(data);
};

loadphone2("a");

{
}
