function loaduser2() {
  fetch("https://jsonplaceholder.typicode.com/users")
    .then((res) => res.json())
    .then((data) => displayuser(data));
}

function displayuser(data) {
  const ul = document.getElementById("user-id");

  for (const user of data) {
    const li = document.createElement("li");
    //     li.innerText = "assalamualykum";
    li.innerText = user.name;

    ul.appendChild(li);
    //     console.log(user.name);
  }

  for (const user of data) {
    //     console.log(user);
    //     console.log(user.name);
  }
}
