const catagorylist = () => {
  const url = `https://openapi.programming-hero.com/api/videos/categories`;
  const url2 = `https://openapi.programming-hero.com/api/videos/category/1000`;

  fetch(url)
    .then((res) => res.json())
    .then((data) => console.log(data.data));
};
catagorylist();
