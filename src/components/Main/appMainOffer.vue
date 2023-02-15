<script>
        export default{
                name:"appMainOffer"
        }
</script>


<template>
        <div class="section-offer rounded d-flex justify-content-between mt-5">
                <div class="w-25 h-100 ">
                        <img src="../../assets/img/banner-item-obj1.png" alt="" class="imgcell w-100">

                </div>
                <div class="align-self-center text-center text-light">
                        <h5>Make Offer</h5>
                        <h2>Get 70% -offer Discound</h2>
                        <button>Get Offers</button>
                </div>
                <img src="../../assets/img/banner-item-obj2.png" alt="" class="leo w-25">
        </div>
</template>


<style lang="scss" scoped>
        .section-offer{
                background-image: url(../../assets/img/banner-item-bg.png);
                margin: 0 auto;
                width: 90%;
                background-repeat: no-repeat;
                background-size: cover;
        }
      .leo{
        object-fit: cover;
        width: 100%;
        height: 100%;
        overflow: hidden;
      }
       
</style>