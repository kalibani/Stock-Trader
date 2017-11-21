<template>
  <div class="container">
    <appHeader/>
    <div class="col-xs-12">
      <router-view/>
    </div>
  </div>
</template>

<script>
  import Header from '@/components/Header'
  export default {
    components:{
      appHeader : Header
    }
  }
</script>

<style>
  body{
    padding: 30px;
  }
</style>
