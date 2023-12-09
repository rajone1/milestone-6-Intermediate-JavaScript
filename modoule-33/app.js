// search to get api
// https://jsonplaceholder

function loaduser() {
  const url = "https://jsonplaceholder.typicode.com/users";
  fetch(url)
    .then((res) => res.json())
    .then((data1) => getuser(data1));
}

function getuser(data) {
  console.log(data);
}
