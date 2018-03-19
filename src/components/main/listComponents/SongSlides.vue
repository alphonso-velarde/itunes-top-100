<template>
  <div class="row">
    <div class="col-lg-8 offset-lg-2" style="margin-top:40px; margin-bottom:20px;">
        <p class="font-stack-label-big-white center">Top 100 tracks</p>
        <p class="font-stack-white center">Bringing you this season's hottest and newest beats! Click on the image to go directly to itunes</p>
        <carousel :autoplay="true" :paginationEnabled="false" :autoplayTimeout="2000" :per-page="4" :loop="true" :paginationActiveColor="'#a5a5af'" :perPageCustom="[[220, 2],[320, 3], [768, 3], [1024, 4]]">
            <slide v-for="(song, index) in ituneList" :key="index">
                <img :src="song['im:image'][2].label" @click="OpenLink(song.link.attributes.href)" class="img-fluid" alt="Song Picture">
                <ul class="mg-top-10">
                    <li class="font-stack-white"><span><i class="fas fa-music"></i></span> {{song['im:name'].label}}</li>
                    <li class="font-stack-white"><span><i class="fas fa-user"></i></span> {{song['im:artist'].label}}</li>
                    <li class="font-stack-white"><span><i class="fas fa-tag"></i></span> {{song.category.attributes.label}}</li>
                </ul>
            </slide>
        </carousel>
    </div>
  </div>
</template>
<script>
/* eslint-disable */
import { Carousel, Slide } from 'vue-carousel';
export default {
    components: {Carousel, Slide },
    props:['ituneList'],
    data () {
        return {
        
        }
    },
    methods:{
    
        
    },
    created(){
    
    }
}
</script>

