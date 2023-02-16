
<script>
import titleSection from '../titleSection.vue';

export default {
  name: "appMainCompetitive",
  components: {
    titleSection
  },
  data() {
    return {
      services: [
        {
          title: "Live Streaming",
          icon:"features-icon-1.png",
          description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vero",
        },
        {
          title: "Great Tournament",
          icon: "features-icon-2.png",
          description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vero,",
        },
        {
          title: "Gaming News",
          icon: "features-icon-3.png",
          description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vero,",
        },
      ],
    };
  },
  methods: {
    getImagePath(imgPath) {
      return new URL(imgPath, import.meta.url).href;
    },
  },
};
</script>

<template>
  <div class="section-competitive text-light">
    <div class="container d-flex py-5">
      <div class="w-50">
        <img src="../../assets/img/features-illus.png" alt="" class="w-100" />
      </div>
      <div class="w-50 px-5">
        <titleSection/>
        <div v-for="(service, index) in services" :key="index" class="d-flex align-items-center">
          <div class="px-2">
            <img :src="getImagePath(`../../assets/img/${service.icon}`)">
          </div>
          <div>
            <h5>{{ service.title }}</h5>
            <p>{{ service.description }}</p>
          </div>
        </div>
        <button class="button bg-success border-black rouded rounded-5 p-2 mt-3">Play Now >></button>
      </div>
    </div>
  </div>
</template>



<style lang="scss" scoped>
</style>
