function loadpost() {
  fetch("https://jsonplaceholder.typicode.com/posts")
    .then((resource) => resource.json())
    .then((data) => display(data));
}

function display(datas) {
  //   console.log(data1);

  const get = document.getElementById("post-container");
  for (const data of datas) {
    const createhtml = document.createElement("div");

    createhtml.classList.add("data1");
    createhtml.classList.add("idd");
    console.log(data);

    createhtml.innerHTML = `

<h4 id="idd" >User-${data.userId}</h4>
<h5>Post: ${data.title}</h5>
<p>Post Description: ${data.body}</p>
`;

    get.appendChild(createhtml);
  }
}
loadpost();
