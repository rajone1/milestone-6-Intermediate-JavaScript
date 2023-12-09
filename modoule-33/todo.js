function todrive() {
  fetch("https://jsonplaceholder.typicode.com/todos")
    .then((res) => res.json())
    .then((data) => displaytodrive(data));
}

function displaytodrive(datas) {
  //   console.log(data1);
  const addnew = document.getElementById("todo-container");
  for (const data of datas) {
    //     console.log(data);

    const setnew = document.createElement("div");

    setnew.classList.add("addbg");
    setnew.innerHTML = `
<h3>title: ${data.title}</h3>
<p>User: ${data.userId}</p>
<p>User: ${data.completed}</p>

<p>${data.completed} its :-${
      data.completed === true ? "complete" : " Not compleate"
    }</p>
`;

    addnew.appendChild(setnew);
  }
}
