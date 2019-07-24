<template>
  <div class="hello">
    <nav class="navbar navbar-expand-lg">
      <a class="navbar-brand" href="#"></a>
      <button
        class="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarNavDropdown"
        aria-controls="navbarNavDropdown"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="container-fluid alignment">
        <div class="collapse navbar-collapse" id="navbarNavDropdown">
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
          </ul>
        </div>
      </div>
    </nav>
  </div>
</template>

<script>
export default {
  name: "NavBarBottom",
  props: {
    msg: String
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.aaa {
  color: white;
  padding: 0 50px 0 50px;
  margin: 0 50px 0 0;
}
.navbar {
  background-color: #2e3e4e;
  color: #808a93;
}
.navbar-toggler {
  background: #2e3e4e;
}
.navbar-toggler-icon {
  background: gray;
}
.alignment {
  margin: 0 0 0 17.5%;
}
</style>
