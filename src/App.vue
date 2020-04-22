<template>
  <div id="app " class="root-link-item">
       <router-link to="/a">1</router-link>
       <router-link to="/b">2</router-link>
       <router-link to="/c">3</router-link>
       <router-link to="/d">4</router-link>
       <router-link to="/">5</router-link>
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App',
 }
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
.root-link-item{
  /* display: flex; */
  text-align: center;
}
.root-link-item a{
  display: inline-block;
  text-underline-offset: none;
  padding: 10px 30px;
  background: cornflowerblue;
  width: 100px;
}
</style>
