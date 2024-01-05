const loaduser = () => {
  fetch("https://randomuser.me/api/?gender=female")
    .then((resp) => resp.json())
    .then((data) => display(data));
};

const display = (show) => {
  const name = document.getElementById("name");
  const name2 = show.results[0].name.first + " " + show.results[0].name.last;
  name.innerHTML = name2;

  const gendertag = document.getElementById("gender");
  gendertag.innerHTML = show.results[0].gender;

  const location = document.getElementById("location");

  location.innerHTML = show.results[0].location.country;

  console.log(show.results[0].location.country);
};

loaduser();

// const loadUser = () => {
//   fetch("https://randomuser.me/api/?gender=female")
//     .then((res) => res.json())
//     .then((data) => displayUser(data));
// };

// const displayUser = (user) => {
//   const genderTag = document.getElementById("gender");
//   genderTag.innerHTML = user.results[0].gender;

//   const name = user.results[0].name.first + " " + user.results[0].name.last;
//   document.getElementById("name").innerHTML = name;
//   console.log(user.results[0]);
// };

// loadUser();
