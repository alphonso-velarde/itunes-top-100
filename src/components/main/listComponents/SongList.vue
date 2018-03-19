<template>
  <div>
    <div class="row">
        <div class="col-lg-10 offset-lg-1">
            <p class="font-stack-label-big center">Here is the complete list of the top 100 itunes list</p>
        </div>
        <div class="col-lg-10 offset-lg-1 song-list-div">
            <div class="table-responsive-sm">
                <table class="table">
                    <thead>
                        <tr>
                            <th></th>
                            <th class="font-stack">Song Title</th>
                            <th class="font-stack">Artist</th>
                            <th class="font-stack">Genre</th>
                            <th class="font-stack">Price</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr class="table-hover" v-for="(song, index) in ituneList" :key="index" @click="OpenLink(song.link.attributes.href)">
                            <td class="font-stack">{{index + 1}}</td>
                            <td class="font-stack">{{song['im:name'].label}}</td>
                            <td class="font-stack">{{song['im:artist'].label}}</td>
                            <td class="font-stack">{{song.category.attributes.label}}</td>
                            <td class="font-stack">{{song['im:price'].label}}</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    </div>
  </div>
</template>
<script>
/* eslint-disable */
export default {
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

