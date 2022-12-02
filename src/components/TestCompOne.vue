<template>
  <div>
    <h1>Test One Component {{ title }}</h1>
    <h2 v-bind="$attrs">number {{ nm }}</h2>
  </div>
</template>

<script>
export default {
  name: "TestCompOne",
  props: {
    title: { type: String, required: true, default: "Art Testing" },
    nm: Number,
  },
  inheritAttrs:false,
  
};
</script>

<style></style>
