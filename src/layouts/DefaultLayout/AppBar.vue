<template>
  <div>
    <v-app-bar
      id="home-app-bar"
      fixed
      v-scroll="onScroll"
      :color="!isScrolling ? 'white' : 'white'"
      :elevation="elevation"
      height="80"
    >
      <v-img
        src="https://cdn.vuetifyjs.com/images/parallax/material2.jpg"
        gradient="to top right, rgba(100,115,201,.33), rgba(25,32,72,.7)"
        max-width="128"
        width="100%"
      ></v-img>

      <v-toolbar-title>&nbsp; James</v-toolbar-title>

      <v-spacer />

      <div>
        <v-tabs class="d-none d-md-flex" optional>
          <v-tab
            :ripple="false"
            active-class="text--primary"
            class="font-weight-bold"
            min-width="96"
            text
            to="/"
          >
            Home
          </v-tab>

          <v-tab
            :ripple="false"
            active-class="text--primary"
            class="font-weight-bold"
            min-width="96"
            text
            to="/about"
          >
            About
          </v-tab>

          <v-menu
            transition="slide-y-transition"
            bottom
            offset-y
            rounded="b-xl"
          >
            <template v-slot:activator="{ on, attrs }">
              <v-tab
                :ripple="false"
                active-class="text--primary"
                class="font-weight-bold"
                min-width="96"
                text
                v-bind="attrs"
                v-on="on"
              >
                Playground
              </v-tab>
            </template>
            <v-list>
              <v-list-item @click="goTo('/chatbox')">
                <v-list-item-title>Chatbox</v-list-item-title>
              </v-list-item>

              <v-list-item @click="goTo('/clippath')">
                <v-list-item-title>ClipPath</v-list-item-title>
              </v-list-item>
            </v-list>
          </v-menu>
        </v-tabs>
      </div>

      <v-app-bar-nav-icon class="d-md-none" @click="drawer = !drawer" />
    </v-app-bar>

    <drawer v-model="drawer" />
  </div>
</template>

<script>
export default {
  name: "AppBar",

  components: {
    Drawer: () => import("./Drawer.vue")
  },

  data: () => ({
    isScrolling: false,
    elevation: 0,
    drawer: null
  }),

  methods: {
    onScroll() {
      const offset = window.pageYOffset;
      this.isScrolling = offset > 50;
      if (offset > 50) {
        this.elevation = 5;
      } else if (offset < 50) {
        this.elevation = 0;
      }
    },
    goTo(route) {
      this.$router.push(route);
    }
  }
};
</script>

<style lang="sass">
#home-app-bar
  border-bottom: 1px solid #ccc !important

  .v-tabs-slider
    max-width: 24px
    margin: 0 auto

  .v-tab
    &::before
      display: none
</style>
