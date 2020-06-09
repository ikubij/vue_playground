<template>
  <div class="home">
    <h1>This is home</h1>
    <!-- <HelloWorld msg="Welcome to Your Vue.js App" /> -->
    sdvsnvdnjksnvdknsvkjnksndvknskdnvksdnvknsdk
  </div>
</template>

<script>
// import HelloWorld from "@/components/HelloWorld";
// import axios from "axios";

export default {
  name: "Home",
  components: {
    // HelloWorld
  },

  created(){
    // var posts=axios.get('api/posts');
    this.$http.get('/api/posts').then(response => {
        var posts = response.data.posts
        console.log(posts)
    })
    
  }
};
</script>
