<template>
  <div>
    <a @click="modalAction()" class="pull-right alignment text-secondary">
      Login
    </a>

    <div
      v-if="modal"
      class="bg-black absolute pin-t pin-l
      h-screen w-full flex items-center justify-center"
    >
      <div class="bg-white p-4 rounded w-1/3">
        <h2 class="mb-2">User Login</h2>
        <form class="modal-content animate" action="/action_page.php">
          <div class="container">
            <label for="uname"><b>Username</b></label>
            <input
              type="text"
              placeholder="Enter Username"
              name="uname"
              required
            />
            <label for="psw"><b>Password</b></label>
            <input
              type="password"
              placeholder="Enter Password"
              name="psw"
              required
            />
            <button type="submit">Login</button>
          </div>
        </form>
        <button @click="modalAction()" class="mt-4 closebtn">
          Close
        </button>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      modal: false
    };
  },
  methods: {
    modalAction() {

      if (this.modal == false) {
        this.modal = true;
      } else {
        this.modal = false;
      }
    }
  }
};
</script>
<style scoped>
input[type="text"],
input[type="password"] {
  width: 100%;
  padding: 12px 20px;
  margin: 8px 0;
  display: inline-block;
  border: 1px solid #ccc;
  box-sizing: border-box;
}
button {
  background-color: green;
  padding: 14px 20px;
  margin: 8px 0;
  border: none;
  cursor: pointer;
  width: 100%;
}
button:hover {
  opacity: 0.8;
}
.closebtn {
  width: auto;
  padding: 10px 18px;
  background-color: #f44336;
}
.alignment {
  padding: 9px;
  color: #6c757d;
}
</style>
