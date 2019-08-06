<template>
  <nav class="navbar navbar-expand-lg navbar-light">
    <div class="container ">
      <a class="navbar-brand" href="#"></a>
      <button
        class="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav">
          <li class="nav-item">
            <router-link to="/" class="nav-link text-secondary" href="#">
              Dashboard
            </router-link>
          </li>
          <li class="nav-item ">
            <router-link
              to="/Components"
              class="nav-link text-secondary"
              href="#"
            >
              Components
            </router-link>
          </li>
          <li class="nav-item ">
            <router-link
              to="/Features"
              class="nav-link text-secondary"
              href="#"
            >
              Features
            </router-link>
          </li>
          <li class="nav-item ">
            <router-link to="/Apps" class="nav-link text-secondary" href="#">
              Apps
            </router-link>
          </li>
          <li class="nav-item ">
            <router-link to="/Data" class="nav-link text-secondary" href="#">
              Data-tables
            </router-link>
          </li>
          <li class="nav-item">
            <router-link to="/Forms" class="nav-link text-secondary" href="#">
              Forms
            </router-link>
          </li>
          <li class="nav-item">
            <router-link to="/modal" class="nav-link text-secondary" href="#">
              modal
            </router-link>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>
<script>
export default {
  name: "NavBarBottom",
  props: {
    msg: String
  }
};
</script>

<style scoped>
body {
  overflow-y: scroll;
}
.container {
  padding: 0 0 0 0;
}
.navbar {
  background-color: #2e3e4e;
  color: #808a93;
}
.navbar-toggler {
  background: #eaeef3;
}
.formation {
  color: #808a93;
  padding-bottom: 1px;
  margin: 5px;
  font-weight: bold;
}
</style>
