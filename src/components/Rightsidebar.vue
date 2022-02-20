<template>
    <div class="container">
        <div class="row">
            <div class="col">
                <h6>Quit</h6>
            </div>
            <div class="col">
                <h6> Personal</h6>
            </div>
            <div class="col">
                <img src="https://i.pravatar.cc/300" alt=" dp" width="40px" height="40px"/>
            </div>
        </div>

         <div class="row">
            <div class="col">
                <h4>Payments</h4>
            </div>
            <div class="col btn4">
                <h6>Clear</h6>
            </div>
        </div>
        <div>
        <div class="card">
        <div class="card-body">
         <div class="content">
          <h6>Received LTC</h6>
          <h6> +15.08USD</h6>
        </div>
        <div class="content">
          <h6>09/28/2020 19:22</h6>
          <h6> +15.08USD</h6>
        </div>
            </div>
        </div> <br/>
         <div class="card">
             <div class="card-body">
        <div class="content">
          <h6>Received LINK</h6>
          <h6> +15.08USD</h6>
        </div>
        <div class="content">
          <h6>09/28/2020 19:22</h6>
          <h6> +15.08USD</h6>
        </div>
            </div>
         </div> <br/>
          <div class="crd-3">
                  + New Transfer
          </div>
    </div>
     <div class="row "> 
          <h4>Wallets</h4>
            <div class="col wallet">
            <h5> BTE</h5>
            <h5> DAI</h5>
            <h5> XRP</h5>
            <h5> USDT</h5>
            

            </div>
            <div class="col wallet">
              <h6 class="wal"> 37% </h6>
               <h6 class="wal"> 37% </h6>
                <h6 class="wal"> 37% </h6>
                 <h6 class="wal"> 37% </h6>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'Rightsidebar'
}
</script>

<style scoped>
.container{
    padding: 5% 0;
}
.row, .wallet, h5{
    padding: 5% 0;
}
.crd-3{
    background: rgb(208, 200, 253);
    padding: 2%;
    height: auto;
}
.btn4{
    background: white;
    color: black;
    padding: 2% 0;
   margin: 0 10%;
    border: none;
    border-radius: 6px;
}
img{
    border-radius: 12px;
}
h4{
    font-weight: bolder;
}
.content{
    display: flex;
    justify-content: space-evenly;
}
.wal{
    padding: 7% 0;
}
</style>