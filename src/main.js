
import { createApp } from 'vue'
import App from './App.vue'
import "bootstrap/dist/js/bootstrap.bundle.min.js"
import { library } from '@fortawesome/fontawesome-svg-core'

/* import font awesome icon component */
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

/* import specific icons */
import { faStar } from '@fortawesome/free-solid-svg-icons'
import { faTwitter,faYoutube,faGit,faInstagram, faFacebook } from '@fortawesome/free-brands-svg-icons'

/* add icons to the library */
library.add(faStar,faGit,faTwitter,faYoutube,faInstagram,faFacebook)


createApp(App)
.component('font-awesome-icon', FontAwesomeIcon)
.mount('#app')

