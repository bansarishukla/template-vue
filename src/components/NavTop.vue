<template>
  <div class="hello1">
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
      <div class="container ">
        <i class="fa fa-home bbb" aria-hidden="true"></i>
        <h5 class="colour">MEGA<span class="colour2">DIN</span></h5>
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
            <form class="form-inline my-2 my-lg-0 spacing input-icons">
              <i class="fa fa-search pos" aria-hidden="true"></i>
              <input
                class="form-control mr-sm-2 icon_spacing"
                type="search"
                placeholder="Search from here...."
                aria-label="Search"
                style="width: 500px;"
              />
            </form>
          </ul>
          <div class="arrange fa-spacing">
            <i class="fa fa-bell-o space" aria-hidden="true"></i>
            <i class="fa fa-envelope-o space" aria-hidden="true"></i>
            <li class="nav-item dropdown effect">
              <a
                class="nav-link dropdown-toggle"
                href="#"
                id="navbarDropdown"
                role="button"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >
                User
              </a>
              <div class="dropdown-menu" aria-labelledby="navbarDropdown">
                <a class="dropdown-item" href="#">Action</a>
                <a class="dropdown-item" href="#">Another action</a>
                <div class="dropdown-divider"></div>
                <a class="dropdown-item" href="#">Something else here</a>
              </div>
            </li>
          </div>
        </div>
      </div>
    </nav>
  </div>
</template>

<script>
export default {
  name: "NavTop",
  props: {
    msg: String
  }
};
</script>

<style scoped>
.container {
  padding: 0 0 0 0;
}
.navbar {
  background-color: #2e3e4e;
  color: #808a93;
}
.colour {
  color: black;
  font-weight: bold;
  padding: 0 0px 0 0;
  margin: 0 0 0 0;
}
.colour2 {
  color: dimgray;
  text-decoration: none;
}
.spacing {
  margin: 0 0 0 10%;
}
.fa-spacing {
  margin: 0 0 0 20%;
}
.space {
  margin: 8% 8% 0 8%;
}
.form-control {
  border: none;
}
.input-icons i {
  position: absolute;
}
.input-icons {
  width: 100%;
  margin-bottom: 10px;
}
.icon {
  padding: 10px;
  color: green;
  min-width: 50px;
  text-align: center;
}
.input-field {
  width: 100%;
  padding: 10px;
  text-align: center;
}
.icon_spacing {
  padding: 0 0 0 30px;
}
.bbb {
  font-size: 25px;
}
.alignment {
  margin: 5px 0 0 70px;
}
.dropdown {
  list-style: none;
  padding: 0 0 0 0;
}
.ul-style {
  display: inline;
}
ul li {
  list-style: none;
  display: inline;
}
.arrange {
  flex-direction: row;
  display: flex;
}
@media (max-width: 1135px) {
  .arrange {
    flex-direction: row;
    display: flex;
  }
  .effect {
    margin: 6% 1% 0 1%;
  }
}
</style>
