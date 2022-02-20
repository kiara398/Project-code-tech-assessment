<template>
<div>
        <h4> GND CRYP </h4>
     </div>
     <div class="container">
  
      <div class="row">
          <div class="col">
            <img src="../assets/dash.png" alt="icon" width="30px" height="30px" /> 
            <small>Dashboard</small><br/>

            <img src="../assets/wallet.png" alt="icon" width="30px" height="30px"/>
             <small>Wallets</small> <br/>
            <img src="../assets/currency.png" alt="icon" width="30px" height="30px"/>
            <small>Currencies</small>
          </div>

           <div class="col">
              <img src="../assets/calc.png" alt="icon" width="30px" height="30px" />
               <small>Calculator</small> <br />
              <img src="../assets/savings.png" alt="icon" width="30px" height="30px" />
               <small>Savings</small> <br/>
              <img src="../assets/expenses.png" alt="icon" width="30px" height="30px" />
             <small>Expenses</small>
          </div>
      </div>
    </div>
      <div class="container">
      <div class="row">
          <div class="col">
              <img src="../assets/fire.png" alt="icon" width="30px" height="30px"/>
               <small>Upcoming</small> <br/>
              <img src="../assets/health.png" alt="icon" width="30px" height="30px"/>
             <br/><small>Health</small>
          </div>

           <div class="col">
              <img src="../assets/mug.png" alt="icon" width="30px" height="30px"/>
               <br/><small>Food</small> <br/>
              <img src="../assets/profile.png" alt="icon" width="30px" height="30px" />
                 <small>Account</small>
          </div>
      </div>
    </div>
      <div class="container">
      <div class="row last-row">
          <div class="col last-col">
              <img src="../assets/flower.png" alt="icon" width="90px" height="80px"/>
              <button class="btn4">Get Pro Now</button>
          </div>
      </div>
    </div>
</template>

<script>
export default {
       name: 'Leftsidebar',
  components: {
   
  }
}
</script>

<style scoped>
.container, h4{
    padding: 15% 0 ;
}
img{
    margin-top: 25%;
}
small{
    color: gray;
    font-weight: bolder;
    font-size: 12px;
}
.last-col{
    background: rgb(208, 200, 253);
    height: 200px;
    border-radius: 8px ;

}
.last-row{
    width: 90%;
    margin: 3%;
}
.btn4{
    background: white;
    color: black;
    padding: 2% 5%;
    border: none;
    margin-top: 30%;
    border-radius: 6px;
}
</style>