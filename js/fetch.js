// Others fetch functions
const loginUser = async (email, password) => {
  try {
    const response = await fetch("https://reqres.in/api/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email: email,
        password: password,
      }),
    });

    const data = await response.json();

    if (response.ok) {
      console.log("Login exitoso:", data);
    } else {
      console.error("Login fallido:", data.error);
    }
  } catch (error) {
    console.error("Error en la solicitud POST (login):", error);
  }
};

const registerUser = async (email, password) => {
  try {
    const response = await fetch("https://reqres.in/api/register", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email: email,
        password: password,
      }),
    });

    const data = await response.json();

    if (response.ok) {
      console.log("Registro exitoso:", data);
    } else {
      console.error("Registro fallido:", data.error);
    }
  } catch (error) {
    console.error("Error en la solicitud POST (registro):", error);
  }
};
// Delete user fetch function
const fetchDeleteUser = async (userId, button) => {
  if (loading) return;

  loading = true;

  const response = await fetch(`https://reqres.in/api/users/${userId}`, {
    method: "DELETE",
  });

  if (response.ok) {
    console.log(`Usuario eliminado correctamente.`);
    const userCard = button.closest(".user-card"); // Encuentra el contenedor del usuario
    if (userCard) {
      userCard.remove(); // Elimina el contenedor del usuario
    }
  } else {
    console.error("Error al eliminar el usuario.");
  }

  loading = false;
};
