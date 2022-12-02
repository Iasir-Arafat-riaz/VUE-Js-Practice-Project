<template>
  <h1>CompB - {{childProvide}}</h1>
  <h2>This is The popup</h2>
  <button @click="$emit('closePopUp','riaz')">Close Popup</button>
  
</template>

<script>
export default {
    name:"CompB",
    inject:["childProvide"],
    emits:["closePopUp"]

}
</script>

<style>

</style>