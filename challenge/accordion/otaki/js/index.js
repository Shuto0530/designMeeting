"use strict"
document.addEventListener("DOMContentLoaded",()=>{
    let accordion_ttl = document.querySelectorAll(".summary");
    accordion_ttl.forEach(x=>
        x.addEventListener("click",()=>{
            x.nextElementSibling.classList.toggle("active");
        })
    );
});

