<template>
  <div id="app">
   <!-- {{msg}} -->
    <div id="nav">
      <router-link to="/">Naslovna</router-link> | 
      <router-link to="/Login">Prijava</router-link> |
      <router-link to="/signup">Registracija</router-link>
    
    </div >
    

    <div class="containter">
     
    <router-view/>
    </div>

    


  </div>

  

</template>


<script>
export default {
   data(){
     return{
       msg:'Hello'
     }
   }
}
</script>


<style lang="scss">
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #163553;
  width: 1000px;
  margin-right: auto;
    margin-left: auto;
   background-image: url(assets/cats.png);
   background-color: rgba(128, 128, 128, 0.212);
   height: 1080px;
   background-repeat: repeat-x;

}

#nav {
  padding: 50px 50px ;
 background-color: rgba(59, 44, 44, 0.411);
font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;

  a {
    font-weight: bold;
    font-size: 25px;
    color: rgba(255, 0, 0, 0.589);
    

    &.router-link-exact-active {
      color: #000000;
     
    }
  }
}


</style>
