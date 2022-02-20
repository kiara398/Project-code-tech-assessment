<template>

<div class="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body">
    <form  @submit.prevent="updateForm">
  <div class="mb-3">
<label class="form-label">Service</label>
   <select class="form-select" aria-label="Default select example" v-model="post.Service" :rules="rules">
  <option selected>Open this select menu</option>
  <option value="1">One</option>
  <option value="2">Two</option>
  <option value="3">Three</option>
</select>
  </div>
  <div class="mb-3">
       <label  class="form-label">Wallet</label>
   <select class="form-select" aria-label="Default select example" v-model="post.Wallet" :rules="rules">
  <option selected>Open this select menu</option>
  <option value="1">One</option>
  <option value="2">Two</option>
  <option value="3">Three</option>
</select>
  </div>
  <div class="mb-3">
    <label  class="form-label">Amount</label>
    <input type="text" class="form-control" v-model="post.Amount" :rules="rules">
  </div>
  <div>
  <button type="button" class="btn ">Cancel</button>
  <button type="submit" class="btn ">Pay</button>
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
      rules: [(value) => !!value || "This field is required!"],
      post: {
        Service: "",
        Wallet: "",
        Amount: "",
      },
    };
  },
  methods: {
    
    async created(){
      const response =await API.getPostByID(this.params.id)
      this.post = response
  },
    async updateForm(e) {
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
      
        e.preventDefault()
        await API.updatePost(formData) 
    },
    },
}
</script>