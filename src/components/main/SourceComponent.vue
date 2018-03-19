<template>
  <div class="container-fluid">
    <header-component></header-component>
    <div class="row" style="margin-top:20px">
      <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12 main-bg-color">
        <song-slides :ituneList="ituneList" id="home"></song-slides>
      </div>
      <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12" style="margin-top:50px;">
        <song-list :ituneList="ituneList" id="songList"></song-list>
      </div>
      <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12 song-search-div">
        <song-search @search="SearchSong" :searchQuery="searchQuery" :isSearchTriggered="isSearchTriggered" :searchResults="searchResults" :isSearchResultsLoading="isSearchResultsLoading" id="search"></song-search>
      </div>
    </div>
    <footer-component></footer-component>
  </div>
</template>
<script>
/* eslint-disable */
import HeaderComponent from'@/components/shared/HeaderComponent';
import FooterComponent from'@/components/shared/FooterComponent';
import SongList from'@/components/main/listComponents/SongList';
import SongSlides from'@/components/main/listComponents/SongSlides';
import SongSearch from'@/components/main/listComponents/SongSearch';
export default {
  components:{SongList, SongSlides, HeaderComponent, SongSearch, FooterComponent},
  data () {
    return {
     ituneList:[],
     searchQuery:{
       value:null,
       limit:10
     },
     searchResults:[],
     isSearchTriggered:false,
     isSearchResultsLoading:false
    }
  },
  methods:{
    GetSongList(){
      var _this = this;
      var jsonp = require('jsonp');
      jsonp('https://itunes.apple.com/us/rss/topalbums/limit=100/json', null, function (err, data) {
        if (data) {
         _this.ituneList = data.feed.entry;
        } else {
           console.error(err.message);
        }
      });
    },
    SearchSong(){
      this.isSearchResultsLoading = true;
      this.isSearchTriggered = false;
      var _this = this;
      var jsonp = require('jsonp');
      jsonp('https://itunes.apple.com/search?term=' + this.searchQuery.value + '&limit=' + this.searchQuery.limit, null, function (err, data) {
        if (data) {
          _this.isSearchTriggered = true;
          _this.isSearchResultsLoading = false;
          _this.searchResults = data.results;
        } else {
           console.error(err.message);
        }
      });
    }
  },
  created(){
    this.GetSongList();
  }
}
</script>

