<template>
  <div>
    <div class="row">
        <div v-for="(result, index) in searchResults" :key="index" @click="OpenLink(result.trackViewUrl)" class="col-lg-3 col-md-3 col-sm-6 col-xs-6 result-div">
            <img :src="result.artworkUrl100" class="img-fluid" alt="Song Picture">
            <ul class="mg-top-10">
                <li class="font-stack-white"><span><i class="fas fa-music"></i></span> {{result.collectionCensoredName}}</li>
                <li class="font-stack-white"><span><i class="fas fa-user"></i></span> {{result.artistName}}</li>
                <li class="font-stack-white"><span><i class="fas fa-tag"></i></span> {{result.kind}}</li>
            </ul>
        </div>
    </div>
  </div>
</template>
<script>
/* eslint-disable */
export default {
    props:['searchResults'],
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

