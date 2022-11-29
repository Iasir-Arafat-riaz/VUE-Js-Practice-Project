<template>
  <h1>MethodAndHandler</h1>
  <!-- <button v-on:click="num+=1">Increment</button> -->
  <button v-on:click="increment(1,$event)">Increment</button>
  <h3>{{num}}</h3>
  <!-- change name -->
  <button @click="changeName">Change Name {{myName}}</button>


</template>

<script>
export default {
data(){
    return{
        num:5,
        myName:"riaz",
    }

},
methods:{
increment(a,event){
    console.log(event)
return this.num+=a;
},
changeName(event){
    this.myName="Golam";
    console.log(event)
}
}
}
</script>

<style>

</style>