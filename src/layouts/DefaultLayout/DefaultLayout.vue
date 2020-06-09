<template>
  <v-app>
    <app-bar />

    <v-content style="margin-top:80px">
      <v-container fluid>
        <transition
          name="custom-classes-transition"
          enter-active-class="animated tada"
          leave-active-class="animated bounceOutRight"
          mode="out-in"
        >
          <router-view />
        </transition>
      </v-container>
    </v-content>

    <v-footer app>
      Made with love
    </v-footer>
  </v-app>
</template>

<script>
import AppBar from "./AppBar";

export default {
  name: "DefaultLayout",
  components: {
    AppBar
  }
};
</script>

<style lang="scss">
@import url("https://cdn.jsdelivr.net/npm/animate.css@3.5.1");
</style>
