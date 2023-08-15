let navLinks = document.querySelectorAll(".main-nav a");
let nav = document.getElementById("nav-links")
console.log(navLinks)

window.addEventListener("resize", resize)

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
    } else{
        item.className = "";
    }
    console.log(item)
})


function openNav(){
    if(nav.className.includes(" open-nav")){
       nav.className = nav.className.replace(" open-nav", "")
    } else {
        nav.className += " open-nav"
    }
    // console.log(nav)
}




