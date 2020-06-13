<template>
  <div class="bodychatBox">
    <v-sheet
      elevation="18"
      class="mx-auto col-lg-6 col-md-7 col-sm-9 col-xs-12"
      height="80vh"
    >
      <section class="mb-2 d-flex justify-center" style="">
        <h1 style="font-weight:strong; ">
          0721345678
        </h1>
      </section>
      <hr class="mb-3" />
      <v-virtual-scroll :items="chats" :item-height="100" height="400">
        <template v-slot="{ item }">
          <v-card
            :key="item.id"
            class="ml-2 text-bubble mb-4"
            :class="{
              'text-received': item.isReceived,
              'text-sent': item.isSent
            }"
            max-width="344"
            shaped
            raised
            elevation="12"
          >
            <v-list-item three-line>
              <v-list-item-content>
                <p class="font-weight-medium">{{ item.text }}</p>
                <p class="text--disabled" style="font-size:.8em">
                  {{ item.time }}
                </p>
              </v-list-item-content>
            </v-list-item>
          </v-card>
        </template>
      </v-virtual-scroll>

      <!-- <ValidationObserver ref="observer" v-slot="{ validate, reset }"> -->
      <ValidationObserver ref="observer" slim>
        <form class="chatArea">
          <ValidationProvider
            v-slot="{ errors }"
            name="Name"
            rules="required|min:1|max:256"
          >
            <v-text-field
              v-model="textMessage"
              :counter="256"
              :error-messages="errors"
              label="Name"
              required
              class="chatInput"
            ></v-text-field>
          </ValidationProvider>

          <v-btn class="mr-4 chatButton my-4" @click="sendMessage">Send</v-btn>
        </form>
      </ValidationObserver>
    </v-sheet>
  </div>
</template>

<script>
import Pusher from "pusher-js";
import { required, min, max } from "vee-validate/dist/rules";
import {
  extend,
  ValidationObserver,
  ValidationProvider,
  setInteractionMode
} from "vee-validate";

setInteractionMode("eager");

extend("required", {
  ...required,
  message: "{_field_} can not be empty"
});

extend("min", {
  ...min,
  message: "{_field_} may not be be less than {length} characters"
});

extend("max", {
  ...max,
  message: "{_field_} may not be be more than {length} characters"
});

export default {
  name: "Home",
  components: {
    ValidationProvider,
    ValidationObserver
  },

  data: () => ({
    textMessage: "",
    chats: [
      {
        id: 1,
        isReceived: true,
        isSent: false,
        text: "Greyhound divisely hello coldly wonderfully",
        time: "11 Jun 2020 19:51:41"
      },
      {
        id: 2,
        isReceived: false,
        isSent: true,
        text: "Ooh, I love that",
        time: "11 Jun 2020 19:51:41"
      },
      {
        id: 3,
        isReceived: true,
        isSent: false,
        text: "Me too man",
        time: "11 Jun 2020 19:51:41"
      },
      {
        id: 1,
        isReceived: true,
        isSent: false,
        text: "Greyhound divisely hello coldly wonderfully",
        time: "11 Jun 2020 19:51:41"
      },
      {
        id: 2,
        isReceived: false,
        isSent: true,
        text: "Ooh, I love that",
        time: "11 Jun 2020 19:51:41"
      },
      {
        id: 3,
        isReceived: true,
        isSent: false,
        text: "Me too man",
        time: "11 Jun 2020 19:51:41"
      }
    ]
  }),

  created() {
    this.$http.get("/api/posts").then(response => {
      var posts = response.data.posts;
      console.log(posts);
    });

    Pusher.logToConsole = true;

    var pusher = new Pusher(process.env.VUE_APP_PUSHER_APP_KEY, {
      cluster: process.env.VUE_APP_PUSHER_APP_CLUSTER
    });

    var channel = pusher.subscribe("home");
    channel.bind("NewMessage", function(data) {
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

<style lang="scss" scoped>
.text-bubble {
}
.text-received {
  background-color: lightgreen;
}

.text-sent {
  background-color: white;
  // align-content: flex-end;
  // align-self: end;
  // float:right,
  margin-left: 40% !important;

  v-list-item {
    float: right !important;
  }
}

.chatArea{
  display: flex;
  justify-content: space-between;
}
.chatInput{
  width:70vh
}
.chatButton{

}
</style>
