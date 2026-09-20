let i = 0;
let txt = `So this is an introductory paragraph of this page. In this page you can
         find all the information about me and my work. Like the art , social media and other info.`;
let speed = 50;
let type = document.getElementById("text");
let card = document.querySelector(".j");
let button = document.querySelector(".button");
let cir = document.querySelector(".circles");
card.addEventListener("mouseover",()=>{
    writer();
})
function writer() {
    if(i<txt.length){
        type.innerHTML += txt.charAt(i);
        i++;
        setTimeout(writer,speed);
    }
}

function shake(){
    card.classList.add("l");
    cir.classList.add("m");
    console.log("shake");
    setInterval(()=>{
    cir.style.display = "flex";
    },5000)

     setInterval(()=>{
        cir.style.transform = "translateY(500px)";
    },5000)
}
   


button.addEventListener('click',shake);