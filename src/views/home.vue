<template>
  <div class="home">
    <nav-bar />
    <h2>Hello This Is Home</h2>
  </div>
</template>

<script>
name: "home";

// Navbar
import navBar from "@/components/navBar.vue";

export default {
  components: {
    navBar,
  },
};
</script>