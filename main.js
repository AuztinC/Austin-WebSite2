let navLinks = document.querySelectorAll(".main-nav a");
let nav = document.getElementById("nav-links")

window.addEventListener("resize", resize)
window.addEventListener("load", resize)

function resize(e){
    if(e.currentTarget.innerWidth < 860 ){
        nav.className = "mobile-nav"
    }   else {
        nav.className = "desktop-nav"
    }
}

navLinks.forEach((item, i) => {
    if(item.href == location.href){
        item.className += "selected";
        console.log(nav)
        if(item.href.includes("index.html")){
            let mainCont = document.querySelector(".main-cont");
            mainCont.style.justifyContent = "start";
            // console.log(mainCont.style.justifyContent)
        }
    } else{
        item.className = "";
    }
    // console.log(item)
})


function openNav(){
    if(nav.className.includes(" open-nav")){
       nav.className = nav.className.replace(" open-nav", "")
    } else {
        nav.className += " open-nav"
    }
    // console.log(nav)
}




