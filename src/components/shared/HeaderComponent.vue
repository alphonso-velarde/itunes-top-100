<template>
  <div class="row">
    <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12 dark-bg-color">
        <nav class="navbar fixed-top navbar-expand-lg navbar-dark bg-dark">
          <a class="navbar-brand brand-text" href="#">Top 100 <span><i class="fas fa-book"></i></span></a>
          <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span @click="isCollapse = !isCollapse" class="navbar-toggler-icon"></span>
          </button>
          <transition name="fade" v-if="isCollapse">
            <div class="navbar-collapse">
             <ul class="navbar-nav mr-auto">
                <li class="nav-item">
                  <a @click="ScrollTo('#home')" class="nav-link header-text">Home</a>
                </li>
                <li class="nav-item">
                  <a @click="ScrollTo('#songList')" class="nav-link header-text">Top 100 itunes List</a>
                </li>
                <li class="nav-item">
                  <a @click="ScrollTo('#search')" class="nav-link header-text">Search</a>
                </li>
              </ul>
            </div>
          </transition>
          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav mr-auto">
              <li class="nav-item nav-item-spacing">
                <a @click="ScrollTo('#home')" class="nav-link header-text">Home</a>
              </li>
              <li class="nav-item nav-item-spacing">
                <a @click="ScrollTo('#songList')" class="nav-link header-text">Top 100 itunes List</a>
              </li>
              <li class="nav-item nav-item-spacing">
                <a @click="ScrollTo('#search')" class="nav-link header-text">Search</a>
              </li>
            </ul>
          </div>
        </nav>
    </div>
  </div>
</template>
<script>
/* eslint-disable */
export default {
  components:{},
  data () {
      return {
        isCollapse:false
      }
  },
  methods:{
    ScrollTo(element){
      this.$scrollTo(element, 300, {
            el: element,
            easing: 'ease-in',
            offset: -60,
            x: false,
            y: true
      });
    }
      
  },
  created(){
  
  }
}
</script>

