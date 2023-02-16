<script>
        import titleSection from '../titleSection.vue';
        export default{
                name:"appMainFeedback",
                components:{
                        titleSection,
                },
                data() {
                        return {
                        feedback: [
                        {
                                stars: 3,
                                text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi quia labore nam!',
                                author: {
                                name: 'kim Ramos',
                                location: 'Serbia',
                                image: "testimonials-image-1.png"
                                }
                        },
                        {
                                stars: 2,
                                text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi quia labore nam!',
                                author: {
                                name: 'john Smith',
                                location: 'USA',
                                image: "testimonials-image-2.png"
                                }
                        },
                        {
                                stars: 1,
                                text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi quia labore nam!',
                                author: {
                                name: 'anna Rossi',
                                location: 'Italy',
                                image:"testimonials-image-3.png"
                                }
                        }
                        ]
                        }
                
                },
                methods:{
                  getImagePath:function(imgPath){
                    return new URL(imgPath,import.meta.url).href;
                  }
                },



        }
</script>


<template>
        <div class="container">
                <div class="row py-5">
                        <div v-for="item in feedback" class="col-sm-4 mb-3 mb-sm-0">
                                <div class="card ">
                                        <div class="card-body">
                                                <div class="d-flex">
                                                        <font-awesome-icon icon="fa-solid fa-star" v-for="i in  item.stars" class="text-warning"/>
                                                </div>
                                                
                                                <p class="card-text">{{ item.text }}</p>
                                                <div class="d-flex ">
                                                        <img  class="img" :src="getImagePath(`../../assets/img/${item.author.image}`)">
                                                        <div class="mx-3">
                                                                <h5>{{ item.author.name }}</h5>
                                                                <span>{{ item.author.location }}</span>
                                                        </div>
                                                </div>
                                        </div>
                                </div>
                        </div>
                </div>
        </div>
       

</template>


<style lang="scss" scoped>
        .img{
                object-fit: contain;
        }
</style>