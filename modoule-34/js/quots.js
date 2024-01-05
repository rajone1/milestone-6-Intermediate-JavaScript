const loadquote = () => {
  fetch("https://api.kanye.rest/")
    .then((resp) => resp.json())
    .then((data) => displayquote(data))
    .catch((error) => console.log(error));
};

const displayquote = (get) => {
  const getid = document.getElementById("quote");
  //   change color
  getid.classList.add("cssstyle");
  //   console.log(get);

  getid.innerHTML = ` new:-${get.quote}`;
};

loadquote();

// 222222222222222

// const loadQuote = () => {
//      fetch('https://api.kanye.rest/')
//          .then(res => res.json())
//          .then(data => displayQuote(data))
//          .catch(error => console.log(error))
//  }

//  const loadQUote2 = async () => {
//      try {
//          const res = await fetch('https://api.kanye.rest/');
//          const data = await res.json();
//          displayQuote(data);
//      }
//      catch (error) {
//          console.log(error)
//      }
//  }

//  const displayQuote = quote => {
//      const blockQuote = document.getElementById('quote');
//      console.log(quote);
//      blockQuote.innerHTML = quote.quote;
//  }

//  loadQuote();
