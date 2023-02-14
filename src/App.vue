<script>
  import appHeader from './components/Header/appHeader.vue';
  import appMain from './components/Main/appMain.vue';
  import appFooter from './components/Footer/appFooter.vue';
  export default{
    name: "App",
    components:{
      appHeader,
      appMain,
      appFooter
    }
    
  }
  

</script>

<template>
  <div class="bg-black"> 
    <appHeader/>
      <appMain/>
      <appFooter/>
  </div>
      

      

</template>

<style lang="scss">
@import "./styles/main.scss"

</style>
