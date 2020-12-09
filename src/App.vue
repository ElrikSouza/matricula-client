<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/login">Login</router-link> |
      <router-link to="/register">Registro</router-link> |
      <router-link to="/enroll">Matricula</router-link> |
      <router-link to="/enroll-edit">Editar Matriculas</router-link>
    </div>
    <router-view />
  </div>
</template>

<style>
html,
body,
#app {
  height: 100%;
  width: 100%;
  margin: 0;
  padding: 0;
}

* {
  box-sizing: border-box;
  padding: 0;
  margin: 0;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;

  display: grid;
  grid-template-rows: 3rem auto;
}

#nav {
  padding: 30px;
  height: 3rem;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}

:root {
  --primary-color: #52c876;
  --primary-color-dark: #388a51;
  --secondary-color: #525ec8;
  --secondary-color-dark: #38398a;
  --danger-color: #e4491a;
  --danger-color-dark: #c03c14;
}
</style>
