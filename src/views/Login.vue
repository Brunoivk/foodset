<template>
 <!-- <div class="login-box">
    <h1 class="prijava">Prijava </h1>
    
   
            
    <div class="text-box">
        
      <form>
  <div class="form-group">
      
    <i class="fa fa-user" aria-hidden="true"></i>
    
    

    <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email"     >
    <input v-model="email" type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email">
  </div>
  <div class="form-group">
    <i class="fa fa-lock" aria-hidden="true"></i>
   <!--  <input type="password" class="form-control" id="exampleInputPassword1" placeholder="Password"> -->
    <!-- <input v-model="password" type="password" class="form-control" id="exampleInputPassword1" placeholder="Password">
  </div>
  
  
  
  <!--<button type="submit" class="btn btn-light">Prijavi se</button> 



</form>
    
    </div>
  
</div>-->
  <div>
  <div class="login-box">
    <div class="col">
     <h1 class="prijava">Prijava </h1>
    </div>
  </div>
  <div class="row">
      <div class="col">
      </div>
      <div class="text-box">
        <form @submit.prevent="login"> <!-- 3. -->
          <div class="form-group">
                <i class="fa fa-user" aria-hidden="true"></i>
            <input v-model="email" type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email">
            <!-- 1. v-model dohvacamo email -->
          </div>
          <div class="form-group">
            <i class="fa fa-lock" aria-hidden="true"></i>
            <input v-model="password" type="password" class="form-control" id="exampleInputPassword1" placeholder="Password">
          </div>
          <button type="submit" class="btn btn-light">Prijavi se</button>
        </form>
      </div>
      <div class="col">
      </div>
    </div>
  </div>

  
</template>


<script>

 // 2. nakon v-modela u scripti imenujemo email i pass
export default {
  data () {
    return {
      email: '',
      password: '',
    }
  },
  methods: {
    login () { // 4 
      firebase.auth().signInWithEmailAndPassword(this.email, this.password).catch(function(error) {
        console.log(error)
        alert("Nepoznata sifra, pokusaj te ponovno")
      });
    }
  }
}
</script>


<style>
@import "https://stackpath.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css";

.fa{
    color: red;
    float: left;
    margin:10px;
    width: 26px;
    
}

.prijava{

    color: black;
    background-color: rgba(255, 255, 255, 0.356);
   
    width: 500px;
    margin: 0 auto;
    
    

}

body{
    margin: 0;
    padding: 0;
    font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;

    
}



.login-box h1{
    font-weight: bold;
    font-size: 75px;
    border-bottom: 8px solid rgb(255, 3, 3);
    margin-bottom: 50px;
    padding: 13px 0;
    font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;

}

.text-box{
    width: 100%;
    overflow:hidden;
    font-size: 20px;
    padding: 5px 0;
    margin: 8px 0;
   

}


.text-box input{
    border: none;
    outline: none;
    background: none;
    color: rgb(255, 255, 255);
    font-size: 25px;
    width: 600px;
    font-weight: bold;


}

.form-group{
    padding: 5px 0;
    margin: 8px 0;
border-bottom: 2px solid rgb(255, 3, 3);
width: 900px;
margin-left: auto;
margin-right: auto;
color:  black;


}





.btn{
width:80%;
background: rgba(255, 255, 255, 0.37);
border: 2px solid rgb(255, 3, 3);
color: rgb(0, 0, 0);
padding: 5px;
font-size: 20px;
cursor:pointer;
margin: 12px;
 font-weight: bold;
 width: 400px;

}



button:hover {
  opacity: 0.6;
}
</style>
