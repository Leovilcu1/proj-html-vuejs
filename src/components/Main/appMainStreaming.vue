<script>
        export default{
                name:"appMainStreaming"
        }
</script>


<template>
        <div class="section-streaming text-light ">
             <div class="container d-flex justify-content-center text-center flex-wrap">
                <div class="w-50 p-5">
                        <p class="">live Streaming</p>
                        <h2>Lorem, ipsum dolor.</h2>
                        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Omnis, blanditiis. Mollitia voluptatem praesentium doloribus placeat.</p>
                </div>
                <div class="w-75 video d-flex">      
                        <img src="../../assets/img/video-bg.png" alt="" class="w-100 ">
                        <button class="btn-live rounded-pill px-4">Live</button>
                        
                        
                </div>

             </div>  
        </div>
</template>


<style lang="scss" scoped>
        .section-streaming{
                background-image: url(../../assets/img/live-streaming-bg.png);
                background-size: cover;
                background-position: center;
        }
        .video{
                position: relative;
        }
        .btn-live{
                position: absolute;
                right: 20px;
                top: 20px;
                background-color: #f79c31;
        }
        
</style>