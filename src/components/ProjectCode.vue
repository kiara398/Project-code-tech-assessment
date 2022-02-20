<template>
  <div class="main">
     <div class="container">
  <div class="row">
    <div class="col-2">
    <Leftsidebar/>
    </div>
    <div class="col-7">
    <Middlesect/>
    </div>
    <div class="col-3">
     <Rightsidebar/>
    </div>
  </div>
</div> 
  </div>  
</template>

<script>

import Leftsidebar from './Leftsidebar.vue'
import Middlesect from './Middlesect.vue'
import Rightsidebar from './Rightsidebar.vue'

export default {
     name: 'ProjectCode',
  components: {
    Leftsidebar,
    Middlesect,
    Rightsidebar
  }
}
</script>

<style scoped>
.col-2, .col-3{
    background: aliceblue;
}
.main{
  background: #ffffff;
}
</style>