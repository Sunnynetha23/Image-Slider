let nxt=document.querySelector(".next")
let pre=document.querySelector(".prev")

nxt.addEventListener("click",()=>{
    let img=document.querySelectorAll(".imgdiv");
    document.querySelector(".slide").append(img[0])
})

pre.addEventListener("click",()=>{
    let img=document.querySelectorAll(".imgdiv");
    document.querySelector(".slide").prepend(img[img.length-1])
})