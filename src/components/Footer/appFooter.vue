<script>
        import appFooterCopyright from './appFooterCopyright.vue';

        export default{
                name:"appFooter",
                components:{
                        appFooterCopyright
                },
                
        }
</script>
        

<template>
  
        <footer >
                <div class="container">
                        <div class="items d-flex justify-content-between">
                                <div class="item w-25">
                                        <img src="../../assets/img/logo.png" alt="">
                                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum eligendi saepe quibusdam excepturi.</p>
                                        <div class="icons">
                                                <font-awesome-icon icon="fa-brands fa-twitter" />
                                                <font-awesome-icon icon="fa-brands fa-facebook" />
                                                <font-awesome-icon icon="fa-brands fa-instagram" />
                                                <font-awesome-icon icon="fa-brands fa-youtube" />
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
        color: white;
}
li{
        list-style: none;
}
a{
        color: white;
        text-decoration: none;
}
.icons >*{
        padding: 10px;
        border: 1px solid lightgray;
        border-radius: 50%;
        margin:10px
}
</style>