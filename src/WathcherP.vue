<template>
  <h1>Volume Tracker (0-20)</h1>
  <h2>Current Volume {{currentVolume}}</h2>
  <button @click="currentVolume=currentVolume+=2">Increase Vol +</button> 
  <button @click="currentVolume=currentVolume-=2" v-if="currentVolume!=-0">Decrease Vol -</button> 
  <br><br>
  <input type="text" v-model="movie">
  <input type="text" v-model="movieInfo.title">
  <input type="text" v-model="movieInfo.actor">
<h2>Root {{rootData}}</h2>
<compOne title="newTi" :nm="50" id="relax"/>
<compA/>
</template>

<script>
import compOne from "./components/TestCompOne.vue"
import compA from "./components/CompA.vue"
export default {
  name:"WatcherP",
  components:{compOne,compA},
  
data(){
  return{
    company:"RiazFirm",
    currentVolume:0,
    movie:"300Sparta",
    movieInfo:{
      title:"",
      actor:""
    },
    rootData:"RiazDeveloper"
  }
},
provide(){
  return {childProvide:this.rootData}
},
methods:{},
watch:{
  currentVolume(newValue,oldValue){
    // console.log(newValue,oldValue)
    if(newValue>oldValue&&newValue==16){
      alert("this volume hamper your ears")
    }

  },
  movie:{
    handler(newVal){
      console.log(`Calling Api ${newVal}`)
    },
    immediate:true
  },
  //for deep watch
  movieInfo:{
    handler(newValue){
      console.log(`calling api for ${newValue.title} and ${newValue.actor}`)
    },
    deep:true
  }
}
}
</script>

<style>

</style>