<template>
  <div class="bodyClipPath">
    <div class="container1">
      <div class="inner1">
        <h1>Hey</h1>
        <p>
          This is an informative card that will tell you something that's...
          well, important!
        </p>
      </div>
    </div>

    <div class="container2">
      <div class="inner2">
        <span>i</span>
        <h1>Hey</h1>
        <p>
          This is an informative card that will tell you something that's...
          well, important!
        </p>
      </div>
    </div>

    <div class="container3">
      <div class="inner3">
        <h1>Hey</h1>
        <p>
          This is an informative card that will tell you something that's...
          well, important!
        </p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Home",
  components: {
    // HelloWorld
  }
};
</script>

<style lang="scss" scoped>
.bodyClipPath {
  background: #dcf5ff;
  margin: 0;
  height: 100vh;
  display: flex;
  justify-content: space-around;
  justify-items: center;
  align-items: center;
  font-family: "Nunito", "sans-serif";
}

.container1 {
  width: 30%;
  background: white;
  border-radius: 10px;
  padding: 0;

  .inner1 {
    background: #487896;
    padding: 1em;
    border-radius: 10px;
    width: 100%;
    clip-path: circle(10% at 0% 0%);
    transition: clip-path 0.5s ease-in-out;

    h1 {
      color: white;
      margin: 0;
    }

    p {
      color: white;
      font-size: 0.8em;
    }
  }

  &:hover .inner1 {
    clip-path: circle(75%);
  }
}

.inner2 {
  background: #14739e;
  padding: 1em;
  border-radius: 10px;
  width: 250px;
  clip-path: circle(10% at 90% 20%);
  transition: all 0.5s ease-in-out;
  cursor: pointer;

  &:hover {
    clip-path: circle(75%);
    background: #00b6ff;
  }

  h1 {
    color: white;
    margin: 0;
  }

  p {
    color: white;
    font-size: 0.8rem;
  }
  span {
    float: right;
    color: white;
    font-weight: bold;
    transition: color 0.5s;
    position: relative;
    margin-right: 4%;
  }
  &:hover span {
    color: rgba(255, 255, 255, 0);
  }
}

.container3 {
  width: 30%;
  background: white;
  border-radius: 10px;
  padding: 0;

  .inner3 {
    background: rgb(9, 201, 153);
    padding: 1em;
    border-radius: 10px;
    width: calc(100% -2em);
    clip-path: inset(0% 0% 0% 100%);
    transition: all 0.5s ease-in-out;
    cursor: pointer;

    h1 {
      color: white;
      margin: 0;
    }

    p {
      color: white;
      font-size: 0.8rem;
    }
  }

  &:hover .inner3 {
    clip-path: inset(0% 0% 0% 0%);
  }
}
</style>
