<template>
  <div>
    <appStock v-for="stock in stocks" :key="stock.id" :stock="stock"/>
  </div>
</template>

<script>
  import Stock from './Stock'
  export default {
    components: {
      appStock: Stock
    },
    computed: {
      stocks(){
        return this.$store.getters.stocks;
      }
    }
  }
</script>

<style lang="css">
</style>
