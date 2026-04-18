async function contact(){

const data = {
name: document.getElementById("cname").value,
email: document.getElementById("cemail").value,
message: document.getElementById("msg").value
};

const res = await fetch("http://localhost:3000/contact",{
method:"POST",
headers:{
"Content-Type":"application/json"
},
body: JSON.stringify(data)
});

const result = await res.json();

alert(result.message);
}