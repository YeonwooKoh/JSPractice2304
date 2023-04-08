/* const quotes=[
    {
        quote:"하이1",
        author:"하이1"
    },
    {
        quote:"하이2",
        author:"하이2"
    },    
    {
        quote:"하이3",
        author:"하이3"
    },    
    {
        quote:"하이4",
        author:"하이4"
    },    
    {
        quote:"하이5",
        author:"하이5"
    },    
    { 
        quote:"하이6",
        author:"하이6"
    },    
    {
        quote:"하이7",
        author:"하이7"
    },    
    {
        quote:"하이8",
        author:"하이8"
    },    
    {
        quote:"하이9",
        author:"하이9"
    },    
    {
        quote:"하이10",
        author:"하이10"
    }
    
];

const quote=document.querySelector("#quote p:first-child");
const author=document.querySelector("#quote p:last-child");

const todaysQuote = quotes[Math.floor(Math.random()*quotes.length)];


quote.innerText = todaysQuote.quote;
author.innerText = todaysQuote.author;

 */

const quotesURL = "https://dummyjson.com/quotes";

fetch(quotesURL)
  .then((response) => response.json())
  .then((data) => {
    console.log(data);
    const result = document.querySelector("#quote-result");
    const random = Math.floor(Math.random() * 30);
    result.querySelector("#quote").innerHTML = data.quotes[random].quote;
    result.querySelector(
      "#author"
    ).innerHTML = `-${data.quotes[random].author}`;
  })
  .catch((error) => console.log(error));