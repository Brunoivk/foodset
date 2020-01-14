<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
   <div class="jumbotron">
  <h1 class="display-4">Dobrodošli u foodset</b></h1>

  



    

  <p class="lead">This is a simple hero unit, a simple jumbotron-style component for calling extra attention to featured content or information.</p>
  <hr class="my-4">
  <p>It uses utility classes for typography and spacing to space content out within the larger container.</p>
  <p class="lead">
    
    <button type="button" class="btn btn-light">Više o nama</button>
  </p>



 
 
</div>

    
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'
import store from "@/store.js"

export default {
   data(){
    return store;
  },
  name: 'home',
  components: {
    HelloWorld
  }
}
</script>



<style lang="scss">
.display-4{

  
}
h1,p{
  font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;

}
.jumbotron{
  background-color:rgba(255, 255, 255, 0.356);
  color: black;
  
  
}

.btn{

  background-color: white;
  border: 1px;
  color: black;
  
}



</style>