<template>
  <div id="content">
    <router-view />
  </div>
  <footer>
    <span>Copyright &copy; 2020 ludwhe.</span>
    <div class="links-wrapper">
      <router-link to="/">Home</router-link>
      <router-link to="/about">About</router-link>
    </div>
  </footer>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import M from "materialize-css";

export default defineComponent({
  name: "App",
  mounted() {
    M.AutoInit();
  }
});
</script>

<style lang="scss">
html,
body,
#app {
  height: 100%;
  margin: 0;
}

body {
  background: linear-gradient(#77f, #f77);
  background-repeat: no-repeat;
  background-attachment: fixed;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #fff;
  display: flex;
  flex-direction: column;
}

#content {
  flex: 1 0 auto;
  padding: 2rem 1rem;
  text-align: center;
}

footer {
  flex-shrink: 1;
  padding: 2rem;
  background-color: #fff;
  color: #2c3e50;
  display: flex !important;
  flex-direction: row;
  justify-content: space-between;

  a {
    color: #2c3e50;
    font-weight: bold;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}

.links-wrapper {
  display: inline-block;

  a:not(:first-child) {
    margin-left: 1rem;
  }
}
</style>
