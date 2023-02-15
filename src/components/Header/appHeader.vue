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
                                                        <button class="button bg-success border-black rouded rounded-5 p-2">EXPLORE GAMES</button>
                                                        <div class="p-2 border border-success rounded rounded-circle btn">
                                                                <img class=" bg-light  rounded rounded-circle p-2 " src="../../assets/img/play-icon.png" alt="">

                                                        </div>
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
        .button{
                margin-right:1rem ;
        background-color: #fff;
        }
      

  
</style>