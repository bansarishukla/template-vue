<template>
  <div class="hello1">
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
    <div class="container ">
       <div class="collapse navbar-collapse" id="navbarNav">
         <i class="fa fa-home bbb" aria-hidden="true"></i>
       <h5 class="colour">MEGA<span class="colour2">DIN</span></h5>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
        <div class="collapse navbar-collapse" id="navbarNav">
          <ul class="navbar-nav">
            <form class="form-inline my-2 my-lg-0 spacing input-icons">
              <i class="fa fa-search pos" aria-hidden="true"></i>
              <input class="form-control mr-sm-2 icon_spacing" type="search" placeholder="Search from here...." aria-label="Search" style="width: 500px;">
          </form>

          </ul>
          <i class="fa fa-bell-o fa-spacing" aria-hidden="true"></i>
          <i class="fa fa-envelope-o space" aria-hidden="true"></i>
          <i class="fa fa-caret-down space" aria-hidden="true"></i>
          <p class="alignment">||</p>
        </div>
          </div>
    </div>
    </nav>

  </div>
</template>

<script>
export default {
  name: "NavBar1",
  props: {
    msg: String
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .container {
    padding: 0 0 0 0;
  }
  .colour {
    color: black;
    font-weight: bold;
    padding: 0 0px 0 0;
    margin: 0 0 0 0;
  }
  .colour2 {
    color:dimgray;
    text-decoration: none;
  }
  .spacing {
    margin: 0 0 0 100px;
  }
  .fa-spacing {
    margin: 0 0 0 200px;
  }
  .space {
    margin: 0 0 0 30px;
  }
  .form-control
  {
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
  margin: 0 0 0 30px;
  font-size: 25px;
}
.alignment {
  margin: 5px 0 0 70px;
}
</style>
