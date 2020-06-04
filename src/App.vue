<template>
  <div class="app">
     <v-fade-transition mode="out-in">
      <router-view />
    </v-fade-transition>
  </div>
</template>

<script>
export default {
  name: 'App',

  data: () => ({
    //
  }),
};
</script>
