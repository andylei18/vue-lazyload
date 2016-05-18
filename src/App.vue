<template>

  <div id="app">
      
    <ul class="list">
      <li v-for ="item in list">
        <a href="#" :title="item.title">
          <img-moudle :imgpic="item.img"></img-moudle>
        </a>
      </li>
    </ul>

  </div>

</template>

<script>

import ImgMoudle from './components/lazyload'
import Data from './components/listData'

export default {
  data () {
    return {
      list:[]
    }
  },
  components: {
    ImgMoudle
  },
  compiled () {
    this.list = Data
  },
  methods:{
    
  }
}
</script>

<style>

body {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
}
ul, li {
  list-style-type: none;
  margin: 0;
  padding: 0;
}

li {
  min-height: 280px;
}

a, img {
  display: block;
}
img:not([src]):not([srcset]) {
  visibility: hidden;
}
img {
  border: 0;
}



#app {
  color: #2c3e50;
  font-family: Source Sans Pro, Helvetica, sans-serif;
  text-align: center;
  width: 100%
}
.list li{
  float: left
}
.list li a{
  background-color: #ccc;
  padding: 10px
}
</style>
