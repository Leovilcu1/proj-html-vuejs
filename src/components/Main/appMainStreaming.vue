<script>
        import titleSection from '../titleSection.vue';
        export default{
                name:"appMainStreaming",
                components:{
                        titleSection
                }
        }
</script>

<template>
        <div class="section-streaming text-light">
          <div class="container d-flex justify-content-center text-center flex-wrap">
            <div class="w-50 p-5">
              <titleSection/>
            </div>
            <div class="w-75 video d-flex position-relative">
              <img src="../../assets/img/video-bg.png" alt="" class="w-100 ">
              <button class="btn-live rounded-pill px-4">Live</button>

              <div class="text-center position-absolute w-100 play">
                <div class="p-2 border border-success rounded rounded-circle btn">
                        <img class=" bg-light  rounded rounded-circle p-2 " src="../../assets/img/play-icon.png" alt="">
                </div>
                <h3>League Of Legends</h3>
              </div>
              <div class="likes d-flex">
                <div>
                        <span class="text-success mx-2">358887</span>
                        <span> Viewers</span>
                </div>
                <div class="mx-5">
                        <span class="text-success mx-2">23599</span>
                        <span>Likes</span>
                </div>
              </div>

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
        .play{
                position: absolute;
                bottom: 50%;
                transform: translate( 0, +50%);
        }
        .likes{
                position: absolute;
                left: 10px;
                bottom: 10px;
        }
        
</style>