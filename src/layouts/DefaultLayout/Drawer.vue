<template>
  <v-navigation-drawer
    top
    color="white"
    fixed
    height="100%"
    overlay-color="secondary"
    overlay-opacity=".8"
    temporary
    v-bind="$attrs"
    v-on="$listeners"
  >
    <v-list color="white" shaped>
      <v-list-item>
        <v-img
          src="https://cdn.vuetifyjs.com/images/parallax/material2.jpg"
          gradient="to top right, rgba(100,115,201,.33), rgba(25,32,72,.7)"
          max-width="128"
          width="100%"
          class="mb-2"
        ></v-img>
      </v-list-item>

      <v-divider></v-divider>

      <v-list-item
        to="/"
        color="primary"
      >
        <v-list-item-content>
          Home
        </v-list-item-content>
      </v-list-item>

      <v-list-item
        to="/about"
        color="primary"
      >
        <v-list-item-content>
          About
        </v-list-item-content>
      </v-list-item>

      <v-menu
        transition="slide-y-transition"
        bottom
        offset-x
      >
        <template v-slot:activator="{ on, attrs }">
          <v-list-item
            color="primary"
            v-bind="attrs"
            v-on="on"
          >
            <v-list-item-content>
              Playground
            </v-list-item-content>
          </v-list-item>
        </template>
        <v-list>

          <v-list-item
            @click="goTo('/chatbox')"
          >
            <v-list-item-title>Chatbox</v-list-item-title>
          </v-list-item>

        </v-list>
      </v-menu>

    </v-list>
  </v-navigation-drawer>
</template>

<script>
export default {
  name: "Drawer",

  methods:{
    goTo(route){
      this.$router.push(route)
    }
  }
};
</script>
