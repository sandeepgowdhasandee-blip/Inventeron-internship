async function reserveTable(){

const data = {
name: document.getElementById("name").value,
email: document.getElementById("email").value,
date: document.getElementById("date").value,
guests: document.getElementById("guests").value
};

const res = await fetch("http://localhost:3000/reserve",{
method:"POST",
headers:{
"Content-Type":"application/json"
},
body: JSON.stringify(data)
});

const result = await res.json();

alert(result.message);
}