// API "https://reqres.in/"

/*-------------------------------------------------------------------------*/
// DOM ELEMENTS
/*-------------------------------------------------------------------------*/

// login elements
const userLogin = document.getElementById("user");
const passwordLogin = document.getElementById("password");
const loginForm = document.getElementById("login-form");

// sign elements
const userSign = document.getElementById("user-sign");
const emailSign = document.getElementById("email-sign");
const passwordSign = document.getElementById("password-sign");
const signBtn = document.getElementById("sign-btn");

// main elements
const allUsers = document.getElementById("all-users");
const logOutBtn = document.getElementById("logout-btn");

// feed elements
const feedPost = document.getElementById("feed-posts");

// Vars for fetchUsers function
let allUsersAPI = [];
let totalUsers = 0;
let userId;

// Var for fetcPosts function
let posts = [];

/*-------------------------------------------------------------------------*/
// FETCHS
/*-------------------------------------------------------------------------*/

let loading = false;

// Load users from API
const fetchUsers = async () => {
  if (loading) return;

  loading = true;

  const response = await fetch(`https://reqres.in/api/users?page=1`);
  const users = await response.json();
  allUsersAPI = users.data;
  totalUsers = allUsersAPI.length;
  userId = allUsersAPI.id;

  loadAllUsers();

  console.log(allUsersAPI);
  console.log(totalUsers);
};

// Load posts from API
const fetchPosts = async () => {
  const responsePosts = await fetch(
    "https://jsonplaceholder.typicode.com/posts"
  );

  posts = await responsePosts.json();

  loadPosts(posts);
};

/*-------------------------------------------------------------------------*/
// EVENTS
/*-------------------------------------------------------------------------*/

// DOMContentLoaded Event
document.addEventListener("DOMContentLoaded", () => {
  fetchUsers();
  fetchPosts();
});

// loadFollowedFriends Event
window.addEventListener("load", loadFollowedFriends);

// LogOut Event
logOutBtn.addEventListener("click", logOut);

/*-------------------------------------------------------------------------*/
// FUNCTIONS
/*-------------------------------------------------------------------------*/

// Function load all users of API
function loadAllUsers() {
  createUsersCard();
  followUser();
  deleteUser();
}

// Function create user´s card
function createUsersCard() {
  for (let i = 0; i < allUsersAPI.length; i++) {
    const cardUser = document.createElement("div");
    cardUser.classList.add("user-card");
    userId = allUsersAPI[i].id;

    cardUser.innerHTML = `
      <div class="user-info">
        <img src="${allUsersAPI[i].avatar}" alt="user-img" class="user-img" />
        <span class="username">${allUsersAPI[i].first_name}</span>
      </div>

      <div class="buttons">
        <button class="follow-btn" data-id="${userId}">Follow</button>
        <button class="delete-btn" data-id="${userId}">Delete</button>
      </div>
    `;

    cardUser.setAttribute("data-id", userId);
    allUsers.appendChild(cardUser);
    console.log("User id: " + userId);
  }

  for (let i = 0; i < allUsersAPI.length; i++) {
    const cardUser = document.createElement("div");
    cardUser.classList.add("user-card");
    userId = allUsersAPI[i].id;

    cardUser.innerHTML = `
      <div class="user-info">
        <img src="${allUsersAPI[i].avatar}" alt="user-img" class="user-img" />
        <span class="username">${allUsersAPI[i].first_name}</span>
      </div>

      <div class="buttons">
        <button class="follow-btn" data-id="${userId}">Follow</button>
        <button class="delete-btn" data-id="${userId}">Delete</button>
      </div>
    `;

    cardUser.setAttribute("data-id", userId);
    allUsers.appendChild(cardUser);
    console.log("User id: " + userId);
  }
}

// Function load posts
function loadPosts() {
  const postsToShow = posts.slice(0, 5);

  postsToShow.forEach((post) => {
    const postElement = document.createElement("div");
    postElement.classList.add("post");

    postElement.innerHTML = `
    <div class="post-header">
        <h3 class="username">User ${post.userId}</h3>
        <img src="img/user.png" alt="user-img" class="user-img" />
      </div>
      <div class="post-content">
        <p>${post.title}</p>
        <p>${post.body}</p>
      </div>  
    `;

    feedPost.appendChild(postElement);
  });
}

// Function verify user login
function verifyLogin(e) {
  if (userLogin.value == "" && passwordLogin.value == "") {
    e.preventDefault();
    alert("Usuario y contraseña vacíos, vuelve a introducir tus datos");
    return;
  }

  if (userLogin.value == "" || passwordLogin.value == "") {
    e.preventDefault();
    alert("Usuario o contraseña vacíos, vuelve a introducir tus datos");
    return;
  }
}

// Function verify user sign in
function verifySignIn(e) {
  if (
    userSign.value == "" &&
    emailSign.value == "" &&
    passwordSign.value == ""
  ) {
    e.preventDefault();
    alert("No has introducido ningún dato");
    return;
  }

  if (
    userSign.value == "" ||
    emailSign.value == "" ||
    passwordSign.value == ""
  ) {
    e.preventDefault();
    alert("Uno o más campos están vacíos, por favor, introdúcelos");
    return;
  }
}

// LogOut function
function logOut() {
  window.location.href = "login.html";
}

// Follow user function
function followUser() {
  const followButtons = document.querySelectorAll(".follow-btn");

  followButtons.forEach((button) => {
    button.addEventListener("click", (event) => {
      const userId = event.target.getAttribute("data-id");
      const friendCard = event.target.closest(".user-card");

      // Mover la tarjeta del usuario a la sección de friends
      moveToFriends(friendCard);
      alert(`Ahora sigues a este usuario!`);
    });
  });
}

// Move cards to friends container
function moveToFriends(friendCard) {
  const friendsList = document.getElementById("friends-list");
  friendsList.appendChild(friendCard);

  // Desactivar el botón "Follow" para que no se pueda volver a seguir al mismo usuario
  const followButton = friendCard.querySelector(".follow-btn");
  const unFollowButton = friendCard.querySelector(".delete-btn");

  followButton.disabled = true;
  followButton.textContent = "Followed";
  unFollowButton.textContent = "Unfollow";

  // Guardar la tarjeta en localStorage
  const friendId = friendCard.getAttribute("data-id"); // Usar el 'data-id' del contenedor
  const followedFriends =
    JSON.parse(localStorage.getItem("followedFriends")) || [];

  // Evitar duplicados
  if (!followedFriends.includes(friendId)) {
    followedFriends.push(friendId);
  }

  // Guardar los IDs de amigos seguidos en localStorage
  localStorage.setItem("followedFriends", JSON.stringify(followedFriends));
}

// Unfollow user function
function unfollowFriend(friendCard) {
  const friendsList = document.getElementById("friends-list");

  // Verificar si la tarjeta aún es un hijo del contenedor
  if (friendsList.contains(friendCard)) {
    // Eliminar la tarjeta del contenedor de amigos
    friendsList.removeChild(friendCard);
  }

  // Eliminar el ID de localStorage
  const friendId = friendCard.getAttribute("data-id");
  let followedFriends =
    JSON.parse(localStorage.getItem("followedFriends")) || [];

  // Eliminar el ID del amigo de la lista de amigos seguidos
  followedFriends = followedFriends.filter((id) => id !== friendId);

  // Actualizar el localStorage
  localStorage.setItem("followedFriends", JSON.stringify(followedFriends));
}

// load followed friends of localStorage function
function loadFollowedFriends() {
  const followedFriends =
    JSON.parse(localStorage.getItem("followedFriends")) || [];
  const friendsList = document.getElementById("friends-list");

  followedFriends.forEach((friendId) => {
    const existingCard = document.querySelector(`[data-id="${friendId}"]`);

    if (existingCard && !friendsList.contains(existingCard)) {
      // Si la tarjeta no está en la lista de amigos, moverla
      friendsList.appendChild(existingCard);

      // Desactivar el botón de "Follow" y cambiar el texto de los botones
      const followButton = existingCard.querySelector(".follow-btn");
      const unFollowButton = existingCard.querySelector(".delete-btn");

      followButton.disabled = true;
      followButton.textContent = "Followed";
      unFollowButton.textContent = "Unfollow";

      // Agregar el evento para el botón "Unfollow"
      unFollowButton.addEventListener("click", () => {
        unfollowFriend(existingCard);
      });
    }
  });
}

// Delete user function
function deleteUser() {
  const deleteButtons = document.querySelectorAll(".delete-btn");

  deleteButtons.forEach((button) => {
    button.addEventListener("click", (event) => {
      const userId = event.target.getAttribute("data-id");
      const friendCard = event.target.closest(".user-card");

      // Eliminar el usuario de la lista de amigos (en el DOM y en el localStorage)
      unfollowFriend(friendCard);
      alert(`Dejaste de seguir a este usuario!`);
    });
  });
}
