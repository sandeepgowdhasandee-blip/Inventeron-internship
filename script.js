const API_URL = "https://jsonplaceholder.typicode.com/users";
const output = document.getElementById("output");

async function getUsers() {
  output.innerHTML = "Loading...";

  try {
    const response = await fetch(API_URL);
    const data = await response.json();

    output.innerHTML = "";

    data.forEach(user => {
      output.innerHTML += `
        <div class="user-card">
          <h3>${user.name}</h3>
          <p>Email: ${user.email}</p>
          <p>City: ${user.address.city}</p>
        </div>
      `;
    });

  } catch (error) {
    output.innerHTML = "Error fetching users";
  }
}

async function createUser() {
  await fetch(API_URL, {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      name: "Misbah",
      email: "misbah@example.com"
    })
  });

  alert("User Created!");
}

async function updateUser() {
  await fetch(`${API_URL}/1`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      name: "Updated User",
      email: "updated@example.com"
    })
  });

  alert("User Updated!");
}

async function deleteUser() {
  await fetch(`${API_URL}/1`, {
    method: "DELETE"
  });

  alert("User Deleted!");
}