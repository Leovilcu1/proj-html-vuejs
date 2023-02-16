<script>
        import titleSection from '../titleSection.vue';
        export default{
                name:"appMainArticles",
                components:{
                        titleSection
                },
                data(){
                        return{
                            periods:[
                                {
                                        min:"10 min",
                                        visual:240,
                                        data:"apr 11/2022",
                                        img:"blog-item-2.png"
                                },
                                {
                                        min:"22 min",
                                        visual:33,
                                        data:"mar 11/2022",
                                        img:"blog-item-3.png"


                                },
                                {
                                        min:"2 min",
                                        visual:900,
                                        data:"apr 11/2022",
                                        img:"blog-item-4.png"

                                },
                              
                                
                            ]    
                        }
                },
                methods:{
                  getImagePath:function(imgPath){
                    return new URL(imgPath,import.meta.url).href;
                  }
                }
                
        }
</script>


<template>
        <div class="container">
                <div class="d-flex justify-content-center pt-3/">
                        <div class="text-center w-50 text-white">
                                <titleSection/>
                        </div>
                </div>
                  

                <div class="row cards-section" >
                        <div class="col-6 py-2 ">
                               
                                <div class="card h-100 ">
                                <img src="../../assets/img/blog-item-1.png" class="card-img-top" alt="...">
                                <div class="card-body">
                                        <div class="text-success" >
                                                <span> 22min </span>
                                                <span> 240</span>
                                                <span> apr 11.2022</span>
                                        </div>
                                        <h3 class="text-light" >Lorem ipsum dolor sit amet consectetur.</h3>
                                               
                                </div>
                                </div>
                                
                        </div>

                        <div class="col-6 cards-right d-flex  align-content-center flex-column h-100 " >
                                
                                
                                <div class="card my-2" v-for="period in periods ">
                                        <div class="row ">
                                                <div class="col-md-4 ">
                                                        <img class="img-fluid rounded" :src="getImagePath(`../../assets/img/${period.img}`)">
                                                </div>
                                                <div class="col-md-8">
                                                <div class="card-body">
                                                        <div class="text-success">
                                                                <span> {{period.min}}</span>
                                                                <span> {{period.visual}}</span>
                                                                <span> {{period.data}}</span>
                                                        </div>
                                                        <h3 class="text-light">Lorem ipsum dolor sit amet consectetur.</h3>
                                                </div>
                                                </div>
                                        </div>  
                                </div>

                               

                                
                        </div>
                        <div class="jumb text-light d-flex align-items-center justify-content-between p-5 w-75 rounded-5">
                                <div class="mx-3">
                                        <h2>Subscribe Newsletter</h2>
                                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur quod officiis ab ad!</p>
                                </div>
                                <div class="fake-input">
                                        <input type="text" placeholder="Enter Your Email"/>
                                        <img src="../../assets/img/send-icon.png"  />
                                </div>
                        </div>
                </div>
        </div>  
       
</template>


<style lang="scss" scoped>
     
        .cards-section{
                position: relative;
                margin-bottom: 150px;
        }
       .jumb{
                background-color:#30415f;
                position: absolute;
                bottom: -50%;
                right: calc(25% /2);
       }
       .card{
        background-color: #30415f;
       }
      
       .fake-input { 
                position: relative;
                width:240px;
 }
        .fake-input input {
                 border:none;
                 background-color:#5b6f92; 
                  width: 100%; 
                  box-sizing: border-box;
                  border-radius: 10px;
                  padding: 10px;
                 }
        .fake-input img { 
                position: absolute;
                top: 5px;
                right: 5px;
                padding: 4px;
                background-color: green;
                border-radius: 50%;
                height: 30px;
                
                 }
        input::placeholder {
                color: #999;
                padding-left: 5px;
}

                
</style>