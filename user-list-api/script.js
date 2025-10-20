const userList = document.getElementById("user-list");

async function fetchUsers() {
  try {
    const response = await fetch("https://jsonplaceholder.typicode.com/users");
    if (!response.ok) {
      throw new Error("Erro ao buscar usuários");
    }
    const users = await response.json();
    users.forEach(user => {
      const li = document.createElement("li");
      li.textContent = `${user.name} - ${user.email}`;
      userList.appendChild(li);
    });
  } catch (error) {
    userList.innerHTML = `<li>Erro: ${error.message}</li>`;
  }
}

fetchUsers();
