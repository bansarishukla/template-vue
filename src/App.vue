<template>
  <div id="app">
    <div id="nav">
      <NavTop></NavTop>
      <NavBottom></NavBottom>
    </div>
    <router-view />
  </div>
</template>

<style>
body {
  overflow-x: hidden;
}
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
#nav {
  padding: 0 0 0 0;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
body {
  background: #eaeef3;
}
</style>
