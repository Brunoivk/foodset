<template>
  <div class="login-box">
    <h1 class="registracija">Registracija</h1>
    
   
            
    <div class="text-box">
        
 <form @submit.prevent="signup">


   <div v-if="errorMessage" class="alert alert-danger">
            <strong>Ups!</strong>
            {{ errorMessage }}
         
         
          </div>
          <div class="form-group">
              
            <i class="fa fa-user" aria-hidden="true"></i>
            <!-- <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email"     >-->
            <input v-model="email" type="email" class="form-control" id="emailField" aria-describedby="emailHelp"  placeholder="Email">
          </div>

  
              <div class="form-group">
               
                <i class="fa fa-lock" aria-hidden="true"></i>
              <!--  <input type="password" class="form-control" id="exampleInputPassword1" placeholder="Password"> -->

                <input v-model="password" type="password" class="form-control" id="passwordField" aria-describedby="emailHelp" placeholder="Password">
              </div>
  
                    <div class="form-group">
                      
                      <i class="fa fa-repeat" aria-hidden="true"></i>

                    <!--  <input type="password" class="form-control" id="exampleInputPassword1" placeholder="Password"> -->
                      <input v-model="passwordAgain" type="password" class="form-control" id="confirmPasswordField" placeholder="Repeat your Password">
                    </div>
                                        <div class="form-group">
                                                  <label for="tipKorisnika">Tip korisnika</label>
                                                  <select
                                                    v-model="odabraniKorisnik"
                                                    id="tipKorisnika"
                                                    class="form-control form-control-lg"
                                                  >
                                                    <option v-for="k in tipKorisnika">{{k}}</option>
                                                  </select>
                                                </div>

                                                
  <button type="submit" class="btn btn-light">Registriraj se</button>
</form>
    </div>
    
  
</div>
  

  
</template>

<script>
 
 import store from "../store";

export default {
  name: "signup",
  data(){
    return{
      errorMessage: "",
      odabraniKorisnik:"",
      email:"",
      password:"",
      passwordAgain:"",
      tipKorisnika: ["Konobar", "Kuhar", "Gost"]
    };
  },
   mounted() {},
  methods:{
    signup(){
     /* if(this.password!==this.passwordAgain||this.passwordAgain!==this.password){      // provjeravanje da li su lozinke iste u repeat pass i pass
        alert("Nisu iste lozinke!");
        console.log(error)
      }
      firebase.auth().createUserWithEmailAndPassword(this.email, this.password).catch(function(error) {
        console.log(error)
    });

    } */

    if(this.password!==this.passwordAgain||this.passwordAgain!==this.password){      // provjeravanje da li su lozinke iste u repeat pass i pass
        alert("Nisu iste lozinke!");
        console.log(error)}

    
      firebase
      .auth()
      .createUserWithEmailAndPassword(this.email, this.password)
        
        .then(() => {
          // postavi podatke o korisniku
          // ovdje ide kod nakon POVRATKA UPITA za ragistraciju i to ako nije prošlo
          let id = this.email;
          // sada moramo spremiti te dodatne podatke
          // Add a new document in collection "korisnici"

          db.collection("korisnici")
            .doc(id)
            .set({

              tipKorisnika: this.odabraniKorisnik
              
            })
            .then(function() {
              console.log("Document successfully written!");
            })
            .catch(function(error) {
              console.error("Error writing document: ", error);
            });
        })
        .catch(error => {
          // ovdje ide kod nakon POVRATKA UPITA za ragistraciju i to ako nije prošlo
          console.log(error);
          this.errorMessage = error.message;  // postavljanje poruke sgreškom
        });

        
      // ovdje se izvršava kod koji ide NAKON SLANJA UPITA za registraciju
    }
  }
}
</script>


<style> 
.registracija{

    color: black;
    background-color: rgba(255, 255, 255, 0.377);
   margin: 0 auto;
   width: 500px;
    
}



</style>