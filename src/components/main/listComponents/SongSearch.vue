<template>
  <div>
    <div class="row">
        <div class="col-lg-8 offset-lg-2">
            <p class="font-stack-label-big-white center">Don't have your favorite song on the list? Don't worry! You can search it below</p>
            <div class="input-group">
                <input v-model="searchQuery.value" v-on:keyup.enter="Search()" type="text" class="form-control" placeholder="Search for...">
                <span class="input-group-btn">
                    <button @click="Search()" class="btn btn-secondary" type="button"><span><i class="fas fa-search"></i></span></button>
                </span>
            </div>
        </div>
        <div v-if="searchResults.length > 0 && !isSearchResultsLoading" class="col-lg-8 offset-lg-2">
            <search-result-display :searchResults="searchResults" class="div-spacing-top"></search-result-display>
        </div>
        <div v-if="searchResults.length == 0 && isSearchTriggered" class="col-lg-8 offset-lg-2 center">
            <p class="no-result-style">Sorry but there were no results, please try another one</p>
        </div>
        <div v-if="isSearchResultsLoading" class="col-lg-8 offset-lg-2 center">
            <img src="../../../assets/loader.gif">
        </div>
    </div>
  </div>
</template>
<script>
/* eslint-disable */
import SearchResultDisplay from'@/components/main/listComponents/SearchResultDisplay';
export default {
    components:{SearchResultDisplay},
    props:['searchQuery', 'searchResults', 'isSearchResultsLoading', 'isSearchTriggered'],
    data () {
        return {
        
        }
    },
    methods:{
       Search(){
           this.$emit('search');
       }
        
    },
    created(){
    
    }
}
</script>

