// toggle close btn


let togglenav = document.querySelector(".toggle");
let listNav = document.querySelector(".home .navbar .nav-list ul");

togglenav.onclick = function(){

    togglenav.classList.toggle("active");

    listNav.classList.toggle("visibal");
}



// smooth scroll to section
var mylink = document.getElementById("links");


$(".links li a").click(function(){
      
    $('html, body').animate({
        
       scrollTop: $('#' + $(this).data('cool')).offset().top 
        
    }, 0);  
  
    });

    // btn go to top
 let mybtn = document.querySelector(".btn-top");
  


 window.onscroll = function (){
    
    "use strict";
    
    if(window.pageYOffset > 800){
        mybtn.style.visibility = "visible";
    }
    else{
        mybtn.style.visibility = "hidden";
    }
    
};
mybtn.onclick = function(){
    "use strict";
    
    window.scrollTo(0,0);
}

// get all data 

// all list item 
let listItem = document.querySelectorAll(".list-filer ul li")
// all image item
let imageItem = document.querySelectorAll(".box-imges .box ")

// function add class active

listItem.forEach(li => {

    li.onclick = function(){
        // active
        listItem.forEach(li =>{

            li.className = "";
        })
       li.className = "active";
         // fliter
   let value = li.textContent;

   imageItem.forEach(img =>{
       img.style.display = "none";
       if(img.getAttribute("data-filter") == value.toLocaleLowerCase() || value == "all"){
        img.style.display = "block";       }
   })
    }
});


  /*******************Start  dark mode******************** */
  
let dark = document.getElementById("dark");
let btn = document.getElementById("btn-dark");





btn.onclick = function(){

 dark.classList.toggle("dark");
  console.log("eslam mohamed");

}

    /*******************end  dark mode******************** */
// writter effect

var typed = new Typed('.animate', {
    strings: [
        'font-end developer',
        'web designer',
        'freelancer'
      

       
    ],
    typeSpeed: 40,
    backSpeed: 40,
    loop: true
  });  
  var typed = new Typed('.motion', {
    strings: [
        'developer',
        'developer'


       
    ],
    typeSpeed: 40,
    backSpeed: 40,
    loop: true
  });  
