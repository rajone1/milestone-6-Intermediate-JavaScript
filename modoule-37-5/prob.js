const richest = function () {
  const url = `https://forbes400.onrender.com/api/forbes400?limit=10`;
  fetch(url)
    .then((resp) => resp.json())
    .then((data) => displayrich(data));
};

const displayrich = (rich) => {
  console.log(rich);
  rich.forEach((r) => {
    console.log(r.person.name);
    const getinfo = document.getElementById("getinfo");

    const creatediv = document.createElement("div");
    creatediv.classList.add("container");

    creatediv.innerHTML = `
    <div class="col">
    <div class="card">
    <h1>${r.person.name}</h1>
    <img src="${r.person.squareImage}" class="card-img-top" alt="..." />
    </div>
</div>
    `;
    getinfo.appendChild(creatediv);
  });
};

richest();
