document.getElementById("apply-js").addEventListener("click", function () {
  const friends = document.getElementsByClassName("friend");
  // console.log(friends);
  for (const friend of friends) {
    friend.style.backgroundColor = "pink";
  }
});

document.getElementById("center").addEventListener("click", function () {
  const friends = document.getElementById("set-center");
  friends.style.textAlign = "center";
  friends.style.backgroundColor = "pink";
});

// document.getElementById("add").addEventListener("click", function () {
//   const newfriend = document.getElementById("newadd");

//   const setnew = document.createElement("div");
//   setnew.innerHTML = `
// <h3 class="friend-name">friend</h3>

// <p>Dolorum dolores</p>

// `;
//   newfriend.appendChild(setnew);
// });

document.getElementById("add").addEventListener("click", function () {
  const addnew = document.getElementById("newadd");

  const addfriend = document.createElement("div");
  addfriend.classList = "friend";
  // addfriend.classList.add("friend");
  addfriend.innerHTML = `
<h3 class="friend-name">friend-$</h3>
<p>Eius inventore hic dolorem pariatur.</p>

`;
  addnew.appendChild(addfriend);
});
