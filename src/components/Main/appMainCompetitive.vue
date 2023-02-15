<script>
export default {
  name: "appMainCompetitive",
  data() {
    return {
      competitiveSection: {
        subtitle: "Lorem ipsum dolor sit amet.",
        title: "Lorem ipsum dolor sit amet consectetur.",
        description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Porro consequuntur vel dolor ex expedita fugit?",
        services: [
          {
            title: "Live Streaming",
            icon: "../../assets/img/features-icon-1.png",
            description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vero",
          },
          {
            title: "Live Streaming",
            icon: "../../assets/img/features-icon-2.png",
            description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vero,",
          },
          {
            title: "Live Streaming",
            icon: "../../assets/img/features-icon-3.png",
            description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vero,",
          },
        ],
      },
    };
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
              <p>{{ competitiveSection.subtitle }}</p>
              <h2>{{ competitiveSection.title }}</h2>
              <p>{{ competitiveSection.description }}</p>
              <div v-for="(service, index) in competitiveSection.services" :key="index" class="d-flex align-items-center">
                <div class="px-2">
                  <img :src="service.icon" :alt="service.title" />
                </div>
                <div>
                  <h5>{{ service.title }}</h5>
                  <p>{{ service.description }}</p>
                </div>
              </div>
              <button>PLAY NOW</button>
            </div>
          </div>
        </div>
      </template>
      

      
      <style lang="scss" scoped>
      </style>
      