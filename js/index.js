// const navbar = document.querySelector(".navbar");

// function showNav(){
    
//     navbar.classList.toggle("nav_fixed")
// }
// showNav();


window.addEventListener("scroll", function(){
    let navbar = document.querySelector(".navbar");

    if(window.pageYOffset >= 600){
        navbar.classList.add('nav_fixed')
        navbar.classList.add("nav_bg")
    }
    else{
        navbar.classList.remove('nav_fixed')
        navbar.classList.remove("nav_bg")
    }
})

const date = new Date();
const year = date.getFullYear();
console.log('year: ', year);

const copyRightBox = document.getElementById("copyright-box");
copyRightBox.innerHTML = year;

const sendBtn = document.getElementById("send-btn");

sendBtn.addEventListener("click", () => {
    alert("Sorry, we couldn't send your message. Please email us at shuaib.connect@gmail.com. Thanks!");
});

