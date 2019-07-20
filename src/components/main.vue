<template>
  <div class="hello">
    <nav class="navbar navbar-expand-lg navbar-light bg-dark">
      <a class="navbar-brand" href="#"></a>
      <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="container">
        <div class="collapse navbar-collapse" id="navbarNav">
          <ul class="navbar-nav">
            <li class="nav-item">
              <router-link to="/" class="nav-link text-white" href="#"> Dashboard </router-link>
            </li>
            <li class="nav-item ">
              <router-link to="/Components" class="nav-link text-white" href="#">Components</router-link>
            </li>
            <li class="nav-item ">
              <router-link to="/Features" class="nav-link text-white" href="#">Features</router-link>
            </li>
            <li class="nav-item ">
              <router-link to="/Apps" class="nav-link text-white" href="#">Apps</router-link>
            </li>
            <li class="nav-item ">
              <router-link to="/Data" class="nav-link text-white" href="#">Data-tables</router-link>
            </li>
            <li class="nav-item aaa">
              <router-link to="/Forms" class="nav-link text-white" href="#">Forms</router-link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  </div>
</template>

<script>
export default {
  name: "main",
  props: {
    msg: String
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .aaa {
    color: white;
  }
</style>
