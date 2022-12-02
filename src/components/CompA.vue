<template>
  <h1>Comp A</h1>
  <button @click="popup='true'">Show the popUp</button>
  <br>
  <!-- Component & v-model -->
 <Input v-model="name" />
    <compB v-if="popup" @closePopUp="closePopup"/>

  <h2>Slots</h2>
<Card>
    Riaz
</Card>
<Card>
    Lullu
</Card>
</template>

<script>
import compB from "./CompB.vue"
import Input from "./InputComponent.vue"
import Card from "./CardComp.vue"
export default {
name:"CompA",

data(){
    return{
        popup:false,
        name:""
    }
},
methods:{
    closePopup(name){
        this.popup=false;
        console.log(name)

    } 
},
components:{compB,Input,Card}
}
</script>

<style>

</style>