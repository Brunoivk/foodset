<template>
<div>
  <div class="login-box">
    <div class="col">
      <h1 class="prijava">Promjena lozinke</h1>
    </div>
  </div>
  <div class="row">
    <div class="col"></div>
      <div class="col">
      </div>
      <div class="text-box">
        <form @submit.prevent="promjena">
          <div class="form-group">
                      
                     

                    <!--  <input type="password" class="form-control" id="exampleInputPassword1" placeholder="Password"> -->
                      <input v-model="password" type="password" class="form-control" id="confirmPasswordField" placeholder="Unesite novu lozinku">
                    </div>
          <button type="submit" class="btn btn-light">Promijeni lozinku</button>
        </form>
      </div>
      <div class="col">
      </div>
    </div>
  </div>
</template>

<script>
export default {
data(){
    return{
        password:''
    }
},
methods:{
    promjena(){
        var user = firebase.auth().currentUser;
user.updatePassword(this.password).then(function() {
  
}).catch(function(error) {
  
  // An error happened.
});

 if (this.$route.name !== 'home') // kada korisnik promjeni sifru odvest ce ga na naslovnu/home
          this.$router.push({name: 'home'}).catch(err => console.log(err))
          alert("Promijenio si lozinku!")
      
    }
}}
</script>