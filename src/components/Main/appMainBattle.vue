<script>

import titleSection from '../titleSection.vue';

export default {
  name: "appMainBattle",
  components: {
    titleSection,
  },
  data() {
    return {
      title: "Title Section",
      playNow: "PLAY NOW",
      games: [
        {
          name: "Call Of Duty",
          date: "December 25, 2022 4:00 pm",
          icon1: "game-img-1.png",
          icon2: "verus-icon.png",
          icon3: "game-img-2.png",
          youtubeIcon: "youtube-icon.png",
          twitchIcon: "twitch-icon.png",
        },
        {
          name: "Apex Legends",
          date: "January 15, 2023 6:00 pm",
          icon1: "game-img-3.png",
          icon2: "verus-icon.png",
          icon3: "game-img-4.png",
          youtubeIcon: "youtube-icon.png",
          twitchIcon: "twitch-icon.png",
        },
        {
          name: "Fortnite",
          date: "February 3, 2023 8:00 pm",
          icon1: "game-img-5.png",
          icon2: "verus-icon.png",
          icon3: "game-img-6.png",
          youtubeIcon: "youtube-icon.png",
          twitchIcon: "twitch-icon.png",
        },
        {
          name: "PUBG",
          date: "March 10, 2023 5:00 pm",
          icon1: "game-img-7.png",
          icon2: "verus-icon.png",
          icon3: "game-img-8.png",
          youtubeIcon: "youtube-icon.png",
          twitchIcon: "twitch-icon.png",
        },
      ],
    };
  },
  methods:{
                  getImagePath:function(imgPath){
                    return new URL(imgPath,import.meta.url).href;
                  }
                }
}
</script>


<template>
  <div class="section-battle text-light">
    <div class="container">
      <div class="d-flex justify-content-center">
        <div class="text-center w-50">
          <titleSection/>
        </div>
      </div>
      <div class="cards d-flex flex-wrap justify-content-between">
        <div v-for="(game) in games"  class="card w-50 mb-3">
          <div class="d-flex justify-content-around icon-card p-3">
            <img :src="getImagePath(`../../assets/img/${game.icon1}`)">
            <img :src="getImagePath(`../../assets/img/${game.icon2}`)">
            <img :src="getImagePath(`../../assets/img/${game.icon3}`)">
          </div>
          <div class="text-center card-main py-3">
            <h2>{{ game.name }}</h2>
            <p class="text-success fs-6">{{ game.date }}</p>
          </div>
          <div class="py-4 text-center">
            <span>
                <img :src="getImagePath(`../../assets/img/${game.youtubeIcon}`)">
                Youtube
            </span>
            <span class="px-4">
                <img :src="getImagePath(`../../assets/img/${game.twitchIcon}`)">
                Twitch
            </span>
          </div>
        </div>
      </div>
      <div class="d-flex justify-content-center p-3">
        <button class="button bg-success border-black rouded rounded-5 p-2">VIEW ALL MACH>></button>

      </div>
    </div>
  </div>
</template>


<style lang="scss" scoped >   
        .section-battle{
                background-color: #212733;
        }
        .card{
                background-color: #28344a;

        }
        .card-main{
                background-color:#30415f ;
        }
      
</style>