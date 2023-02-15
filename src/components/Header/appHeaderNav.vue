<script>
        export default{
                name:"appHeaderNav",
                data(){
                  return{
                    navbar:[
                      {
                        logo:"logo.png",
                        paginaPrincipale:"Home",
                        contatti:"Contact",
                        nav:[
                          {games:["aaaaa","bbbbb","ccccc"]},
                          {shop:["dddd","eeeee","ffffff"]},
                          {pages:["xxxxx","yyyyyyy","zzzzzz"]},
                        ],
                      }
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
      <div class="header-nav d-flex justify-content-between" v-for="x, index in navbar" :key="index">
          <div>
          <img :src="getImagePath(`../../assets/img/${x.logo}`)">
        </div>
        <div>
          <ul class="d-flex">
            <li>
              <a  href="#" class="text-light">{{ x.paginaPrincipale}}</a>
            </li>
            <li class="nav-item dropdown mx-3" v-for="(y, strindex) in x.nav" :key="strindex">
              <a class="nav-link dropdown-toggle text-light" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                {{ Object.keys(y)[0] }}
              </a>
              <ul class="dropdown-menu">
                <li v-for="(item, itemindex) in Object.values(y)[0]" :key="itemindex">
                  <a class="dropdown-item" href="#">{{ item }}</a>
                </li>
              </ul>
            </li>
            <li>
              <a href="#" class="text-light">{{ x.contatti }}</a>
            </li>
          </ul> 
        </div>
        <div>
          <img src="../../assets/img/cart-icon.png" alt="">
          <button class="px-4 py-2 mx-3 bg-success rounded-5 border border-dark ">Live Streaming</button>
        </div>
      </div>
</template>


<style lang="scss" scoped>
ul {
  list-style: none;
  padding: 0;
}

li {
  padding: 0.5rem;
}
a{
  text-decoration: none;

}
</style>