<template>
  <div class="middlesect">
    <form class="d-flex">
      <input
        class="form-control me-2"
        type="search"
        placeholder="Search"
        aria-label="Search"
      />
    </form>
    <h2 class="txt">
      Hi, Mikey<span class="position-absolute badge rounded-pill">23</span>
    </h2>
    <div class="card-group">
      <div class="card crd1">
        <div class="card-body">
          <h6>Bitcoin</h6>
          <img
            src="../assets/btc.png"
            class="card-img"
            alt="..."
            height="130px"
          />
          <h5>02222345 BTC</h5>
          <p class="card-text"><small class="text-muted">43567 USD</small></p>
        </div>
      </div>
      <div class="card crd2">
        <div class="card-body">
          <h6>Etherium</h6>
          <img
            src="../assets/eth.png"
            class="card-img"
            alt="..."
            height="130px"
          />
          <h5>02222345 ETH</h5>
          <p class="card-text"><small class="text-muted">78654 USD</small></p>
        </div>
      </div>
      <div class="card crd3">
        <div class="card-body">
          <h6>Litecoin</h6>
          <img src="../assets/lite.png" class="card-img" alt="..." height="130px" />
          <h5>02222345 LTC</h5>
          <p class="card-text"><small class="text-muted">24356 USD</small></p>
        </div>
      </div>
    </div>
    <div class="container">
      <div class="row">
        <div class="col">
          <h4>Latest Activity</h4>
          <h6>Updated 2 hours ago</h6>
        </div>
        <div class="col">
          <a > edit </a>
        </div>
        <div class="col">
          <button
            type="button"
            class="btn btn-primary"
            data-bs-toggle="modal"
            data-bs-target="#staticBackdrop"
          >
            +
          </button>
          <Modal />
        </div>
      </div>
      <div class="row">
        <div class="col-sm-2">
          <img src="../assets/insurance.png" alt="icon" width="60px" height="50px" />
        </div>
        <div class="col">
          <h6>Insurance<br /><span> Property Coverage </span></h6>
        </div>
        <div class="col">
          <h6>LTC Wallet<br /><span> Personal Account</span></h6>
        </div>
        <div class="col">
          <h6>7 Jun 21<br /><span>Last Payment</span></h6>
        </div>
        <div class="col">
          <h6>-10.24 LTC <br /><span>Balance</span></h6>
        </div>
      </div>
      <div class="row">
        <div class="col-sm-2">
          <img src="../assets/electric.jpg" alt="icon" width="50px" height="50px" />
        </div>
        <div class="col">
          <h6>Electricity<br /><span>Utility Payments</span></h6>
        </div>
        <div class="col">
          <h6>ETH Wallet<br /><span>Personal Wallet</span></h6>
        </div>
        <div class="col">
          <h6>9 June 21<br /><span>Last Payment</span></h6>
        </div>
        <div class="col">
          <h6>-3.543 ETH <br /><span>Balance</span></h6>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Modal from "./Modal.vue";
export default {
  name: "Middlesect",
  components: {
    Modal,
  },
};
</script>

<style scoped>
.container {
  padding: 10% 0;
}
.card {
  margin: 5%;
  height: 250px;
  border: none;
  background: pink;
}
.txt {
  padding-top: 5%;
  text-align: left;
}
.crd1 {
  background: rgb(253, 232, 200);
}
.crd2 {
  background: rgb(250, 211, 217);
}
.crd3 {
  background: rgb(174, 222, 250);
}
h6 {
  font-weight: bold;
  font-size: 15px;
}
span {
  font-weight: bolder;
  font-size: 11px;
  color: gray;
  margin: 0;
  padding: 0;
}
.row {
  padding-top: 5%;
}
.badge {
  padding: 0.5%;
  color: white;
  background: rgb(233, 116, 74);
}
input{
    background: #f7f6f6;
    margin-top: 2%;
    border: none;
    border-radius: 12px;
}
</style>