<template>
  <div class="home">
    <h3>ChatBox</h3>
    
  </div>
</template>

<script>
import Pusher from "pusher-js";

export default {
  name: "Home",
  components: {
    // HelloWorld
  },

  created() {
    this.$http.get("/api/posts").then(response => {
      var posts = response.data.posts;
      console.log(posts);
    });

    Pusher.logToConsole = true;

    var pusher = new Pusher(process.env.VUE_APP_PUSHER_APP_KEY, {
      cluster: process.env.VUE_APP_PUSHER_APP_CLUSTER
    });

    var channel = pusher.subscribe('home');
    channel.bind('NewMessage', function(data) {
      // app.messages.push(JSON.stringify(data));
      console.log(data);
      alert(data.message);
    });

    

    // this.subscribe()

    // this.pusher = new Pusher("5d1d52b2664649aca971", { cluster: "mt1" });
    // this.channel = this.pusher.subscribe("home");
    // this.channel.bind("NewMessage", data => {
    //   this.$emit("NewMessage", data);
    //   console.log(data);
    // });
    // this.$on("NewMessage", chatMessage => {
    //   alert("Hey");
    //   console.log(chatMessage);
    // });
  },

  methods: {
    // ...
    // subscribe() {
    //   let pusher = new Pusher("YOUR_PUSHER_APP_KEY", {
    //     cluster: "YOUR_CLUSTER"
    //   });
    //   pusher.subscribe("reviews");
    //   pusher.bind("review_added", data => {
    //     this.mockReviews.unshift(data.review);
    //   });
    // }
  }
};
</script>
