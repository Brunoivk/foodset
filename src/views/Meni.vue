<template>
  <div id="app" class="container my-5">
    <h1>My online majstoreeee</h1>
<div class="row">
     <!--  <Item
        v-for="item in forSale"
        :key="item.invId"
        :invId="item.invId"
        :name="item.name"
        :image="item.image"
        :price="item.price" /> -->
    </div>
    
  </div>
</template>
<script>

import Item from './Item.vue';
/* import {mapGetters} from 'vuex'; */
export default {
name: 'Products',
data() {
  return {
    product: [
      {  name: 'An Item', price: 999 },
      {  name: 'Thing',  price: 1499 },
      {  name: 'Doo-dad',  price: 499 },
      {  name: 'Other thing', price: 299 },
    ], 
  }
},
methods:{
        saveData(){

db.collection("products").add(this.product)
.then(function(docRef) {
    console.log("Document written with ID: ", docRef.id);
})
.catch(function(error) {
    console.error("Error adding document: ", error);
});


        }


},

  computed: {
  /*    forSale() { 
       return this.$store1.mapGetters.forSale; },
    
    inCart() {
       return this.$store1.getters.inCart; },  */
    
    

    /* forSale() { return this.$store.getters.forSale; },
    inCart() { return this.$store.getters.inCart; }, */ 
  },
  components: {
    Item: Item,
  },
};
</script>
<style>
  /* Nothing for now *//* { invId: 1, name: 'An Item', image: '//placehold.it/200', price: 999 },  
      { invId: 2, name: 'Thing', image: '//placehold.it/200', price: 1499 },
      { invId: 3, name: 'Doo-dad', image: '//placehold.it/200', price: 499 },
      { invId: 4, name: 'Other thing', image: '//placehold.it/200', price: 299 }, */
</style>