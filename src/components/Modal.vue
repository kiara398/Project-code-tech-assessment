<template>

<div class="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
          <h4> Bill Payment </h4>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body">
    <form  @submit.prevent="submitForm" method="POST">
  <div class="mb-3">
<label class="form-label">Service</label>
   <select class="form-select" aria-label="Default select example" v-model="post.Service" :rules="rules">
  <option selected>Open this select menu</option>
  <option value="1">One</option>
  <option value="2">Two</option>
  <option value="3">Three</option>
</select>
  <p v-if="errors.length" class="error">
        <b>Please select a service:</b> </p>
  </div>
  <div class="mb-3">
       <label  class="form-label">Wallet</label>
   <select class="form-select" aria-label="Default select example" v-model="post.Wallet" :rules="rules">
  <option selected>Open this select menu</option>
  <option value="1">One</option>
  <option value="2">Two</option>
  <option value="3">Three</option>
</select>
  <p v-if="errors.length" class="error">
<b>Please select a payment wallet:</b> </p>
  </div>
  <div class="mb-3">
    <label  class="form-label">Amount</label>
    <input type="text" class="form-control" v-model="post.Amount" :rules="rules">
      <p v-if="errors.length" class="error">
    <b>Please Enter an Amount:</b> </p>
  </div>
  <div class="button-div">
  <button type="button" class="btn1 ">Cancel</button>
  <button type="submit" class="btn2 ">Pay</button>
  </div>
  
</form>
      </div>
    </div>
  </div>
</div>
</template>

<script>
import API from "../api";
export default {
       name: 'Modal',
  data() {
    return {
      errors: [],
      post: {
        Service: "",
        Wallet: "",
        Amount: "",
      },
    };
  },
  methods: {
    async submitForm(e) {
      const formData = new FormData();
      formData.append("service", this.post.Service);
      formData.append("wallet", this.post.Wallet);
      formData.append("Amount", this.post.Amount);
         if (this.post.Service && this.post.Wallet && this.post.Amount) {
        return true;
      }

      this.errors = [];

      if (!this.post.Service || this.post.Wallet || this.post.Amount) {
        this.errors.push('fields required.');
      }
        await API.addPost(formData)
        e.preventDefault()
    },
  },
}
</script>

<style scoped>
b{
    color: rgb(235, 42, 42);
    font-weight: lighter;
   
}
.modal{
    text-align: left; 
}
.modal-header, h4{
   background: rgb(105, 1, 105);
   color: white;
 padding-left: 20%;
}
.button-div{
    display: flex;
    justify-content: space-evenly;
}
.btn1{
    border: 0.5px solid red;
    border-radius: 6px;
    padding:2% 5%;
    background: white;
    color: red;
}
.btn2{
    border: none;
    border-radius: 6px;
    padding:2% 5%;
    background: rgb(105, 1, 105);
    color: white;
    width: 100px;
}
</style>