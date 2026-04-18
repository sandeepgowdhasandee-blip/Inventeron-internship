// Menu Cards

let foods=["Pizza","Burger","Pasta","Steak","Salad","Sandwich","Dessert","Coffee"]

let container=document.getElementById("menuCards")

foods.forEach(food=>{

container.innerHTML+=`
<div class="col-md-3">
<div class="card">
<img src="https://source.unsplash.com/300x200/?${food}" class="card-img-top">
<div class="card-body">
<h5>${food}</h5>
</div>
</div>
</div>
`

})


// Form Validation

document.getElementById("form").addEventListener("submit",function(e){

let name=document.getElementById("name").value
let email=document.getElementById("email").value
let msg=document.getElementById("msg").value

if(name==""||email==""||msg==""){

alert("Please fill all fields")
e.preventDefault()

}

})


// Dark Mode

let btn=document.getElementById("darkBtn")

btn.onclick=function(){

document.body.classList.toggle("dark")

localStorage.setItem("mode",document.body.classList.contains("dark"))

}


// Load Dark Mode

if(localStorage.getItem("mode")==="true"){

document.body.classList.add("dark")

}


// Today's Special

let day=new Date().getDay()

let special=["Pizza","Burger","Pasta","Steak","Salad","Sandwich","Dessert"]

document.getElementById("special").innerHTML="Today's Special: "+special[day]

let navLinks = document.querySelectorAll(".nav-link")

navLinks.forEach(link => {

link.addEventListener("click", function(){

navLinks.forEach(l => l.classList.remove("active"))

this.classList.add("active")

})

})