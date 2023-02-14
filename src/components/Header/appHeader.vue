<script>
        import appHeaderNav from './appHeaderNav.vue';
        export default{
                name:"appHeader",
                components:{
                        appHeaderNav
                }
        }
</script>

<template>
        <header>
                <div class="controler  mx-3">
                        <div class="container text-light">
                                <div class="container ">
                                        <appHeaderNav/>
                                        <div class="d-flex justify-content-between align-items-center">
                                                <div class="w-25">
                                                        <p>Lorem ipsum dolor sit.</p>
                                                        <h1>Lorem, ipsum dolor.</h1>
                                                        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Cupiditate aspernatur ea omnis voluptates fugit asperiores!</p>
                                                        <button>EXPLORE GAMES</button>
                                                </div>
                                                <div class="w-75 ">
                                                        <img src="../../assets/img/index-banner-illus.png" alt="" class=" w-100 ">
                                                </div>
                                        </div>
                                </div>
                                

                        </div>
                </div>
           
        </header>

</template>
<style lang="scss" scoped>

        header{
                background-image: url(../../assets/img/index-banner-bg.png);
                background-size: cover;
                background-position: center;

        }
        .controler{
                background-image: url(../../assets/img/game-controler.png);
                background-repeat: no-repeat;
                background-position: left;
                background-size: 200px;
                
        }

  
</style>