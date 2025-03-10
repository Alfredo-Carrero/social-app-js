# Social App JavaScript

Este proyecto es una **simulación de una red social**, similar a la plataforma X. Está diseñado para practicar con **HTML, CSS y Vanilla JavaScript** y tiene como objetivo mostrar una serie de características típicas de redes sociales, como la gestión de usuarios, publicaciones y la interacción básica entre ellos.

## Características Principales

La aplicación cuenta con las siguientes características:

- **Navegación fluida**: La navegación entre las páginas de la aplicación es rápida y sencilla, ofreciendo una experiencia de usuario similar a una red social real.
  
- **Inicio de sesión**: Los usuarios pueden iniciar sesión utilizando una cuenta existente (no es real, debido al uso de una API).

- **Creación de cuenta**: Si un usuario no tiene cuenta, puede registrarse creando una nueva cuenta (no es real, debido al uso de una API).

### Pantalla Principal

Una vez que el usuario ha iniciado sesión (de cualquiera de las dos formas posibles), es redirigido a la pantalla principal. Esta pantalla está dividida en tres secciones:

#### 1. **Sección "Friends"** (Usuarios Seguidos)

- En esta sección, se muestran los usuarios a los cuales el usuario actual ha dado *Follow*.
- Los usuarios seguidos pueden ser eliminados de esta lista mediante la opción de *Unfollow*.
  
#### 2. **Sección "What's Happening"** (Qué Está Pasando)

- En esta sección, se muestran una serie de publicaciones simuladas de otros usuarios.
- Las publicaciones son obtenidas mediante una petición a un **API** (primer endpoint).
  
#### 3. **Sección "How to Follow"** (A Quién Seguir)

- En esta sección, se muestran sugerencias de usuarios que el usuario puede seguir.
- Estos usuarios son mostrados mediante una petición a una **API** (segundo endpoint).
- El usuario puede optar por seguir a otros usuarios o eliminar sugerencias de su lista.

#### 4. **Botón de Cerrar Sesión**

- En la parte superior de la pantalla principal, el usuario tiene un icono de *"Log Out"*.
- Al hacer clic en este icono, el usuario cierra sesión y es redirigido a la página de inicio de la aplicación.

## ¿Cómo Funciona?

1. **Inicio de sesión**: El usuario ingresa con su cuenta ya registrada o se crea una nueva cuenta. 
2. **Pantalla principal**: Una vez que el usuario inicia sesión, accede a la pantalla principal donde puede interactuar con las tres secciones.
3. **Interacción**: El usuario puede seguir y dejar de seguir a otros usuarios, ver publicaciones recientes, y eliminar sugerencias de usuarios a seguir.
4. **Cerrar sesión**: El usuario puede cerrar sesión en cualquier momento.

## Tecnologías Utilizadas

Este proyecto fue desarrollado utilizando las siguientes tecnologías:

- **Vanilla JavaScript**: Para la lógica principal de la aplicación y la interacción con las interfaces.
- **API Simulada**: Para la obtención de datos de usuarios y publicaciones.

---

## Notas

- **Este proyecto es solo una simulación** y no tiene ninguna conexión con una red social real.
- El propósito principal de la aplicación es practicar con las herramientas mencionadas (HTML, CSS y Vanilla JavaScript).
