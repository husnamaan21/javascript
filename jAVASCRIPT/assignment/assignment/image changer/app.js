const images=["download.jpg","download2.jpg","download3.jpg","download4.jpg"];
const btn=document.getElementById("btn");
    
   var a =  document.getElementById("img");
   
   btn.addEventListener("click",function (){
    console.log("button clicked");
    const randomNumber=RandomNumber();
  a.src=images[randomNumber];
  a.setAttribute("height","300px");
  a.setAttribute("width","400px");
 
});
function RandomNumber(){
   return Math.floor(Math.random()*images.length) ;
}
