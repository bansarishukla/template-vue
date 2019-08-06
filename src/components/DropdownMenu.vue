<template>
  <div class="app">
    <a
      href="#"
      v-on:click.prevent="showDropDown = !showDropDown"
      class="mr2 flex items-center justify-center w4 title"
    >
      <div class="text-secondary">User</div>
      <i
        :class="{ 'fa-caret-up': showDropDown, 'fa-caret-down': !showDropDown }"
        class="fa"
        aria-hidden="true"
      />
    </a>
    <transition name="slide-fade">
      <div class="w4 mt1 content" v-if="showDropDown">
        <ul class="menu list pl0 pa0 ma0">
          <li v-for="(link, index) in links" :key="index" class="list">
            <a
              href="#"
              class="dd-link pointer hover-bg-moon-gray text-secondary"
            >
              {{ link.name }}
            </a>
          </li>
        </ul>
      </div>
    </transition>
  </div>
</template>
<script>
export default {
  data() {
    return {
      showDropDown: false,
      links: [
        {
          name: "Account"
        },
        {
          name: "Profile"
        },
        {
          name: "Logout"
        }
      ]
    };
  }
};
</script>
<style scoped>
.slide-fade-enter-active {
  transition: all.3s ease;
}
.slide-fade-leave-active {
  transition: all.2s ease;
}
.slide-fade-enter {
  transform: translateY(-50px);
  opacity: 0;
}
.slide-fade-leave-to {
  transform: translateY(-50px);
  opacity: 0;
}
.app {
  position: absolute;
  z-index: 10;
  overflow: hidden;
}
.fa {
  color: #6c757d;
}
.title {
  text-decoration: none;
}
.content {
  background-color: aliceblue;
}
</style>
