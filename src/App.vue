<template>
  <div id="app">
    <!-- 로고 -->
    <WishHeader />

    <!-- 입력창 -->
    <WishInput />

    <!-- 리스트 -->
    <WishList />

    <!-- 전체삭제 -->
    <WishFooter />

  </div>

</template>

<script>
import WishHeader from "./views/WishHeader.vue";
import WishInput from "./views/WishInput.vue";
import WishList from "./views/WishList.vue";
import WishFooter from "./views/WishFooter.vue";
export default {
  components :{
    WishHeader,
    WishInput,
    WishList,
    WishFooter
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
}
</style>
