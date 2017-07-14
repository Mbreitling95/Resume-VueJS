<template>
  <div id="app">
    <div class="nav" >
      <img src="./assets/logo.png">
      
      <ul>
      <li>Current: {{ $route.name }}</li>
      <li>Nav to: <router-link to="/">Home</router-link></li>
      <li>Nav to: <router-link to="/static">Static Resume</router-link></li>
      <li>Nav to: <router-link to="/Interactive">Interactive Resume</router-link></li>
      <li></li>  
      </ul>

    </div>
    

    <router-view></router-view>



    


  </div>


  <!-- <div id="app">
      <h1>Named Routes</h1>
      <p>Current route name: {{ $route.name }}</p>
      <ul>
        <li><router-link :to="{ name: 'home' }">home</router-link></li>
        <li><router-link :to="{ name: 'foo' }">foo</router-link></li>
        <li><router-link :to="{ name: 'bar', params: { id: 123 }}">bar</router-link></li>
      </ul>
      <router-view class="view"></router-view>
    </div> -->
</template>

<script>
export default {
  name: 'app'
}
</script>

<style>
.nav {
  position:relative;
  width:40%;
  margin-left:auto;
  margin-right:auto;
}
.nav li {
  min-width:200px;
  display:inline-block;
}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  /*text-align: center;*/
  color: #2c3e50;
  margin-top: 60px;
}
</style>
