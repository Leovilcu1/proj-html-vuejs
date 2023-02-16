<script>
        export default{
                name:"appMainFacts",
                data(){
                        return{
                                streams:[
                                        {
                                                count:1135,
                                                title:"Twitch Streams"                               
                                        },
                                        {
                                                count:44,
                                                title:"Another Title"                               
                                        },
                                        {
                                                count:982,
                                                title:"You Another Title"                               
                                        },
                                        {
                                                count:40,
                                                title:"One More Title"                               
                                        },
                                ]
                        }
                }
        }
</script>


<template>
        <div class="container text-center text-light py-5">
          <h2 class="p-3">Futio Quick Facts</h2>
          <div class="p-4 d-flex justify-content-between">
            <div v-for="(stream) in streams" class="item">
              <div class="border border-secondary rounded-5 p-4">
                <h1>{{ stream.count }}</h1>
                <p>{{ stream.title }}</p>
              </div>
            </div>
          </div>
        </div>
      </template>


<style lang="scss" scoped>
        .item{
                width: 20%;
        }
</style>