const images=["download.jpg","download2.jpg","download3.jpg","download4.jpg","download5.jpg","download6.jpg"];
const pre=document.querySelector("#prevbtn");
const nex=document.querySelector("#nextbtn");
const img=document.querySelector("#img");
const a = document.querySelector(".background2");
let currrentItem=0;
img.setAttribute("height","300px");
img.setAttribute("width","400px");

window.addEventListener("DOMContentLoaded",function(){
  console.log("shake");
  show(currrentItem)
 
})
function show(currrentItem){
  const item=images[currrentItem];
  img.src=item;
}


pre.addEventListener("click",function previous(){
  currrentItem--;
  if(currrentItem < 0){
    
    currrentItem = images.length-1;
    a.innerText="no images here";
  
  }else{
  
    a.innerHTML="";

  }
  show( currrentItem);

});
nex.addEventListener("click",function (){
  currrentItem++;
  if(currrentItem > images.length-1){
   
    currrentItem =0;
    a.innerText="no more images";
    
  
 
 
  }else{
    a.innerText="";

  }
  
  show( currrentItem);

   

})