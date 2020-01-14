<template>
  <div id="app">
   <!-- {{msg}} -->
    <div id="nav">
      <!-- <div class="naslovna">
      <router-link to="/">Naslovna</router-link>  | 
      <router-link v-if="!authenticated" to="/login">Login</router-link>  | 
      <router-link v-if="!authenticated"  to="/signup">Signup</router-link></div>  -->

<span v-if="!authenticated">
                  
                 <div class="naslovna">
                  <router-link to="/">Naslovna</router-link> |
                  <router-link  to="/login">Login</router-link>  | 
                  <router-link   to="/signup">Signup</router-link>
                 
                  </div>

                </span>
      
               
               
            <span v-if="authenticated">
                <div class="naslo"> <router-link to="/">Naslovna</router-link></div>
                
                <div class="naslo"> <router-link to="/meni">Meni</router-link></div>
                
                <div class="useremail"> Prijavljeni ste kao : {{ userEmail }}</div> 
                
                <div class="userLogoutPromjena">
                
                  <a @click="logout" class="logout" href="#">Logout</a>  | 
                <router-link to="/PromjenaLozinke">Promjena lozinke</router-link></div>
               
            </span>

            
            
  <!--  <div class="nav">
          <div class="row">
            <div class="col">
              <nav class="navbar navbar-expand-lg navbar-light mb-2">
               
             
            
              <div class="naslovna" id="navbarSupportedContent">
                 <router-link v-if="!authenticated"  to="/">Naslovna</router-link> | 
                <router-link v-if="!authenticated"  to="/login">Login</router-link> | 
                <span v-if="authenticated">
                  {{ userEmail }}
                  <a @click="logout"  href="#">Logout</a>
                </span>
                <router-link v-if="!authenticated"  to="/signup">Signup</router-link>
            </div>
          </nav>
        </div>
      </div>
    </div> -->
    </div >
    
 
    <div class="containter">
     
    <router-view/>
    </div>

    


  </div>


</template>


<script type="text/javascript">
import store from '@/store.js'

export default {
  data () {
    return store;
  },

  methods: {
    logout() {
      firebase.auth().signOut()
      
    }
  },

 /* mounted () {
    const self = this;
    firebase.auth().onAuthStateChanged(user => {
      if (user) {
        console.log("Upjesno ste prijavljeni " + user.email)
        self.authenticated = true
        self.userEmail = user.email
        

// novi kod
        db.collection("korisnici")
          .doc(self.userEmail)
          .get()
          .then(doc => {
            if (doc.exists) {
              console.log("Document data:", doc.data());
              self.tipKorisnika = doc.data().tipKorisnika;


              
            } else {
              // doc.data() will be undefined in self case
              console.log("No such document!");
            }
          });


        if (self.$route.name !== 'login')
 self.$router.push({name: 'login'})
 console.log(user.email);
 }


      
      else {
        console.log("Odjavljeni ste")
        self.authenticated = false
        if (self.$route.name !== 'home')  // nakon sto se korisnik odjavi u app ce ga odvesti na login 
          self.$router.push({name: 'home'}).catch(err => console.log(err))
      }
    }); */



 /*    firebase.auth().onAuthStateChanged(user => {
 if (user) {
   this.authenticated=true
   this.userEmail=user.email
   if (this.$route.name !== 'home')
 this.$router.push({name: 'home'})
 console.log(user.email);
 }
 else {
 this.authenticated=false
 if (this.$route.name !== 'login')
 this.$router.push({name: 'login'})
 console.log("No user");
 }
}); */
mounted(){
    firebase.auth().onAuthStateChanged(user => {
      if (user) {
        console.log("Upjesno ste prijavljeni " + user.email)
        this.authenticated = true
  this.userEmail = user.email

  
         db.collection("korisnici")
          .doc(user.email)
          .get()
          .then(doc => {
              if (doc.exists) {

                console.log("Prijavljeni ste kao:", doc.data());

                this.tipKorisnika = doc.data().tipProfila;
              } else {
                // doc.data() will be undefined in this case
                console.log("No such document!");
              }
          });
      
        if (this.$route.name === 'login')
          this.$router.push({name: 'home'}).catch(err => console.log(err))
      }
      else {
        console.log("User is not logged in")
        this.authenticated = false
        if (this.$route.name !== 'login')
          this.$router.push({name: 'login'}).catch(err => console.log(err))
      }
    });
  




  }
}
</script>


<style lang="scss">
.naslovna{
    font-size: 25px;
 
}
.naslo{
  font-size: 25px;
}
.useremail{
  text-align: center;
  color: #000000;
  font-weight: bold;
  
}

.userLogoutPromjena{
  font-size: 13px;

}
.logout{
  font-size: 13px;
}
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
    
    color: rgba(255, 0, 0, 0.589);
    

    &.router-link-exact-active {
      color: #000000;
     
    }
  }
}


</style>
