// document.addEventListener("DOMContentLoaded",function(){
//   let thumbnail = document.getElementById('thumbnail');
//   thumbnail.addEventListener("mouseover", function(event){
//   changeImage(event)});
// })

const { Configuration, OpenAIApi } = require("openai");
const configuration = new Configuration({
  apiKey: process.env.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,
});
const openai = new OpenAIApi(configuration);
const response = await openai.createImage({
  prompt: "A cute baby sea otter",
  n: 1,
  size: "1024x1024",
});

document.getElementById('aiIMG').src=response.data.data[0].url;



const thumbnails = document.querySelectorAll('#thumbnail');
thumbnails.forEach(tn => {
  tn.addEventListener("mouseover", function(evt){
    changeImage(evt)
  })});

function changeImage(evt){

  const links = [
    "url(/assets/header.png)",
    "url(/assets/landscape.jpeg)",
    "url(/assets/image3.jpeg)",
    "url(/assets/image4.webp)"
  ]

  let activeTn = evt.target.attributes.itemid.nodeValue;
  let header_image = document.getElementById('headerImage');
  header_image.style.backgroundImage = links[+activeTn-1];
  console.log(activeTn);
  //var currentOpacity = window.getComputedStyle(header_image).opacity;
  //console.log(currentOpacity);
  //header_image.classList.toggle("transparent")
}

