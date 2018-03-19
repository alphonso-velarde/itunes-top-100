import Vue from 'vue'

export default {
  data() {
    return {
           
    };
  },
  methods:{
    OpenLink(link) {
      var win = window.open(link, '_blank');
      win.focus();
    }
  }
}
