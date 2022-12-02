<template>
  <div class="card">
    <slot>Default Card</slot>
  </div>
</template>

<script>
export default {
name:"CardComp",

}
</script>

<style>
.card{
  box-shadow: 0 4px 8px 0 gray;
  transition: 0.3s;
  padding: 16px;
  margin-bottom:20px;
  width: 200px;
}
.card:hover{
  box-shadow: 0 4px 8px 0 rgb(161, 19, 19);
}
</style>