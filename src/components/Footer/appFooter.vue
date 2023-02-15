<script>
        import appFooterCopyright from './appFooterCopyright.vue';

        export default{
                name:"appFooter",
                components:{
                        appFooterCopyright
                }
        }
</script>
        

<template>
  
        <footer >
                <div class="container">
                        <div class="items d-flex justify-content-between">
                                <div class="item w-25">
                                        <img src="../../assets/img/logo.png" alt="">
                                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum eligendi saepe quibusdam excepturi.</p>
                                        <div>
                                                icon icon icon icon
                                        </div>
                                </div>
                                <div class="item">
                                        <h3>Quick Links</h3>
                                        <ul>
                                                <li><a href="#">Lorem</a></li>
                                                <li><a href="#">Lorem</a></li>
                                                <li><a href="#">Lorem</a></li>
                                                <li><a href="#">Lorem</a></li>
                                                <li><a href="#">Lorem</a></li>
                                        </ul>
                                </div>
                                <div class="item">
                                        <h3>Quick Links</h3>
                                        <ul>
                                                <li><a href="#">Lorem</a></li>
                                                <li><a href="#">Lorem</a></li>
                                                <li><a href="#">Lorem</a></li>
                                                <li><a href="#">Lorem</a></li>
                                                <li><a href="#">Lorem</a></li>
                                        </ul>
                                </div>
                                <div class="item">
                                        <h3>Quick Links</h3>
                                        <ul>
                                                <li><a href="#">Lorem</a></li>
                                                <li><a href="#">Lorem</a></li>
                                                <li><a href="#">Lorem</a></li>
                                                <li><a href="#">Lorem</a></li>
                                                <li><a href="#">Lorem</a></li>
                                        </ul>
                                </div>
                                <div class="item">
                                        <h3>Quick Links</h3>
                                        <ul>
                                                <li><a href="#">Lorem</a></li>
                                                <li><a href="#">Lorem</a></li>
                                                <li><a href="#">Lorem</a></li>
                                                <li><a href="#">Lorem</a></li>
                                                <li><a href="#">Lorem</a></li>
                                        </ul>
                                </div>
                        </div>
                </div>
 
                <appFooterCopyright/>
        </footer>
                
</template>


<style lang="scss" scoped>
footer{
        padding-top: 150px;
        background-color:#28344a ;
}
</style>