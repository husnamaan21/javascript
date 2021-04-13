
    const colors=["whitesmoke","thistle","cadetblue"," blueviolet","crimson","darkcyan","yellowgreen","grey"];
    const btn=document.getElementById("btn");
    const clr=document.querySelector(".color");
    var a=document.querySelector(".background")
   
    btn.addEventListener("click",function (){
        console.log("button clicked");
        const randomNumber=RandomNumber();
      a.style.backgroundColor=colors[randomNumber];
      clr.innerText=colors[randomNumber];
    });
    function RandomNumber(){
       return Math.floor(Math.random()*colors.length) ;
    }
 
  