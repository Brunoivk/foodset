<template>
  <div class="admin">
   <h1>Admin stranica</h1>
   <h2>Unesite novi meni u jelovnik</h2>

    <div class="form-group">
               <input type="text" placeholder="Naziv " v-model="product.name"  class="form-control" >
          </div>
            
        
           
          <div class="form-group">
               <input type="text" placeholder="Cijena" v-model="product.price"  class="form-control" >
          </div>
            
        
           
          <div class="form-group">
             <button @click="saveData" class="btn btn-primary">Spremi podatke</button>  
          </div>
             
             
             
             <hr>

             <h3>Jelovnik</h3>

             <table>
                 <thead>
                     <tr>
                         <th>---Naziv---  </th> 
                         <th>Cijena u kunama</th>
                     </tr>

                 </thead>

                 <tbody>
                     <tr v-for="product in products">
                         <td>{{product.name}}</td> 
                         <td>{{product.price}}</td>
                     </tr>
                 </tbody>
             </table>
        
            
        
            
    
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'
import store from "@/store.js"

export default {
  
  name: 'admin',
  props: {
      msg: String
  },
  
 data(){
     return {
         products: [],
         product: {
            name: null,
             price: null

         }
        
         
     }
 },
 methods:{
     readData(){
                db.collection("products").get().then((querySnapshot) => {
               /*  this.products = querySpapshot; */
            querySnapshot.forEach((doc) => {
               /*  // doc.data() is never undefined for query doc snapshots*/
                this.products.push(doc.data()); 
            });
        }); 

     },
     saveData(){
                db.collection("products").add(this.product)
                .then((docRef) => {
                    console.log("Document written with ID: ", docRef.id);
                    Object.assign(this.$data, this.$options.data.apply(this)) // ponavljali su se ispisi pa sam pronasao u komentaru od nekoga
                    this.readData();
                })
                .catch(function(error) {
                    console.error("Error adding document: ", error);
                });

     
 }, 
 
 reset(){
     Object.assign(this.$data, this.$options.data.apply(this));
 }
},

created(){
           this.readData(); 
} 


};
</script>



<style lang="scss">




</style>