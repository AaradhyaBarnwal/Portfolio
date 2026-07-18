let i = 0;
let txt = `So this is an introductory paragraph of this page. In this page you can
         finding all the  write ups written by me like stories,poems and articles.`;
let speed = 50;
let type = document.getElementById("text");
let card = document.querySelector(".j");
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