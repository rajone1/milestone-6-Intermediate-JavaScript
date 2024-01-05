const loadphone = (searchText) => {
  const url = ` https://openapi.programming-hero.com/api/phones?search=${searchText}`;
  // const url = ` https://openapi.programming-hero.com/api/phones?search=apple`;

  fetch(url)
    .then((res) => res.json())
    .then((data) => phonedata(data.data))
    .then((error) => console.log(error));
};

const phonedata = (phones) => {
  // console.log(phone);

  const phoneContainer = document.getElementById("phones-container");
  phoneContainer.innerText = "";

  // 3.  phone 10 phone only

  // phone = phone.slice(0, 10);

  const showall = document.getElementById("show-all");

  if (phones.length > 10) {
    phones = phones.slice(0, 5);
    showall.classList.remove("d-none");
  } else {
    showall.classList.remove("d-none");
  }

  const nophone = document.getElementById("no-found");
  // 4 show disply none
  if (phones.length === 0) {
    nophone.classList.remove("d-none");
  } else {
    nophone.classList.add("d-none");
  }

  phones.forEach((getphone) => {
    // console.log(getphone);

    const createnew = document.createElement("div");

    createnew.classList.add("col");

    createnew.innerHTML = `

    
    <div class="card h-100">
      <img src="${getphone.image}" class="card-img-top" alt="..." />
      <div class="card-body">
        <h2 class="card-title">${getphone.brand}</h2>
        <h4 class="card-text">
          ${getphone.phone_name}
        </h4>

        <button onclick = "loadphondetails('${getphone.slug}')" class="btn btn-primary"  data-bs-toggle="modal"
        data-bs-target="#phondetailmodal">more info</button>

        
     



      </div>
    </div>
  </div>

`;

    phoneContainer.appendChild(createnew);
  });
};

// 2 buton

// document.getElementById("btn-search").addEventListener("click", function () {
//   const searchfield = document.getElementById("search-fild");
//   const change = searchfield.value;
//   loadphone(change);
// });

// or separate the function

document.getElementById("btn-search").addEventListener("click", function () {
  processSearch();
});

const processSearch = () => {
  const searchfield = document.getElementById("search-fild");
  const change = searchfield.value;
  loadphone(change);
};

// 4. show details code

const loadphondetails = (id) => {
  const url = `https://openapi.programming-hero.com/api/phone/${id}`;

  fetch(url)
    .then((res) => res.json())
    .then((data) => displaymodalinfo(data.data));
};

// use async
// const loadphondetails = async (id) => {
//   const url = `https://openapi.programming-hero.com/api/phone/${id}`;

//   const res = await fetch(url);
//   const data = await res.json();
//   displaymodalinfo(data.data);
// };

// 5 enter button add in search fild

document
  .getElementById("search-fild")
  .addEventListener("keypress", function (e) {
    // console.log(e.key);

    if (e.key == "Enter") {
      processSearch();
    }
  });

loadphone("apple");

// 6 .use modal to show phon details data

const displaymodalinfo = (phonedata) => {
  console.log(
    phonedata,
    // phonedata.mainFeatures.sensors[0],
    // phonedata.mainFeatures.sensors[1],
    phonedata.image
  );

  const titale = document.getElementById("phondetailmodalLabel");

  titale.innerHTML = `<h2>phone name: ${phonedata.slug}</h2>`;
  const bodymodal = document.getElementById("bodymodal");

  bodymodal.innerHTML = `
  
<img  src="${phonedata.image}">
  
  <h3> blutooth: ${
    phonedata.others ? phonedata.others.Bluetooth : "no blutooth has this phone"
  }</h3>
  
  
  
  `;
};
