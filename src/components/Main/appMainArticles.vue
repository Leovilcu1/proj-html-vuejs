<script>
        export default{
                name:"appMainArticles",
                
        }
</script>


<template>
        <div class="container">
                <div class="text-center w-50 text-white section-articles">
                        <h5>Latest News</h5>
                        <h2 clas>
                                Stay Updated width Our Latest News Articles
                        </h2>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aspernatur excepturi corrupti cumque, asperiores officiis in?</p>
                </div>  

                <div class="row cards-section">
                        <div class="col-6 ">
                               
                                <div class="card h-100">
                                <img src="../../assets/img/blog-item-1.png" class="card-img-top" alt="...">
                                <div class="card-body">
                                        <div>
                                                <span> 10 min</span>
                                                <span> 240</span>
                                                <span> apr 11.2022</span>
                                        </div>
                                        <h3>Lorem ipsum dolor sit amet consectetur.</h3>
                                               
                                </div>
                                </div>
                                
                        </div>

                        <div class="col-6 cards-right d-flex  align-content-center flex-column">
                                
                                
                                <div class="card mb-2">
                                        <div class="row g-0">
                                                <div class="col-md-4">
                                                        <img src="../../assets/img/blog-item-2.png" class="img-fluid rounded" alt="...">
                                                </div>
                                                <div class="col-md-8">
                                                <div class="card-body">
                                                        <div>
                                                                <span> 10 min</span>
                                                                <span> 240</span>
                                                                <span> apr 11.2022</span>
                                                        </div>
                                                        <h3>Lorem ipsum dolor sit amet consectetur.</h3>
                                                </div>
                                                </div>
                                        </div>  
                                </div>

                                <div class="card my-2" >
                                        <div class="row g-0">
                                                <div class="col-md-4">
                                                        <img src="../../assets/img/blog-item-3.png" class="img-fluid rounded" alt="...">
                                                </div>
                                                <div class="col-md-8">
                                                <div class="card-body">
                                                        <div>
                                                                <span> 10 min</span>
                                                                <span> 240</span>
                                                                <span> apr 11.2022</span>
                                                        </div>
                                                        <h3>Lorem ipsum dolor sit amet consectetur.</h3>
                                                </div>
                                                </div>
                                        </div>  
                                </div>

                                <div class="card mt-2" >
                                        <div class="row g-0">
                                                <div class="col-md-4">
                                                        <img src="../../assets/img/blog-item-4.png" class="img-fluid rounded" alt="...">
                                                </div>
                                                <div class="col-md-8">
                                                <div class="card-body">
                                                        <div>
                                                                <span> 10 min</span>
                                                                <span> 240</span>
                                                                <span> apr 11.2022</span>
                                                        </div>
                                                        <h3>Lorem ipsum dolor sit amet consectetur.</h3>
                                                </div>
                                                </div>
                                        </div>  
                                </div>
                        </div>
                        <div class="jumb text-light d-flex align-items-center justify-content-between p-5 w-75 rounded-5">
                                <div>
                                        <h2>Subscribe Newsletter</h2>
                                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur quod officiis ab ad!</p>
                                </div>
                                <div>
                                        <input type="email" placeholder="Enter your Email" class="rounded p-2">
                                </div>
                        </div>
                </div>
        </div>  
       
</template>


<style lang="scss" scoped>
        .section-articles{
                margin: 0 auto;
        }
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
                
</style>