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
            v-for="(item, i) in items"
            :key="i"
            :to="item.link"
            :ripple="false"
            active-class="text--primary"
            class="font-weight-bold"
            min-width="96"
            text
          >
            <span v-if="!item.children">
              {{ item.name }}
            </span>

            <v-menu
              transition="slide-y-transition"
              bottom
              v-else
            >
              <template v-slot:activator="{ on, attrs }">
                <v-btn
                  class="purple"
                  color="primary"
                  dark
                  v-bind="attrs"
                  v-on="on"
                >
                  
                </v-btn>
              </template>
              <v-list>
                <v-list-item
                  v-for="(item, i) in items"
                  :key="i"
                  @click="echo"
                >
                  <v-list-item-title>{{ item.title }}</v-list-item-title>
                </v-list-item>
              </v-list>
            </v-menu>



          </v-tab>
        </v-tabs>
      </div>

      <v-app-bar-nav-icon class="d-md-none" @click="drawer = !drawer" />
    </v-app-bar>

    <drawer v-model="drawer" :items="items" />
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
    drawer: null,
    items: [
      {
        name: "Home",
        link: "/"
      },
      {
        name: "About",
        link: "/about"
      },
      {
        name: "Projects",
        link: "/projects"
      },
      {
        name: "Playground",
        // link: "/",
        children: [
          { title: 'Chatbox', link: 'chatbox' },
          { title: 'Click Me', link: 'chatbox' },
          { title: 'Click Me', link: 'chatbox' },
          { title: 'Click Me 2', link: 'chatbox' },
        ],
      }
    ]
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
    echo(){
      alert('dd')
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
