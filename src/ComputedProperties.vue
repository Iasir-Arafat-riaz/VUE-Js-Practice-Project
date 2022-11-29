<template>
  <h1>full name : {{ fullName }}</h1>

  <h2>Computed Total Price : {{ allPriceTotal }}</h2>
  <button @click="customer.push({ name: 'nusratKeya', price: 300, item: 'care'})">add customer</button>
  <h2>Function Total price: {{total()}}</h2>
  <input type="text" v-model="textF">
  <br>
  <h1>Higher Price</h1>
  <h4 v-for="(high,index) in highPrice " :key="index">{{high.price}}</h4>
</template>

<script>
export default {
  data() {
    return {
      firstName: "IasirArafat",
      lastName: "Riaz",
      customer: [
        { name: "akash", price: 200, item: "potato" },
        { name: "medha", price: 500, item: "ciment" },
        { name: "Riaz", price: 600, item: "software" },
      ],
      textF:""
    };
  },
  methods: {
    total(){
        console.log("method total price")
        return this.customer.reduce(
        (total, current) => (total += current.price),
        0
      );
    }
  },
  computed: {
    fullName() {
      return `${this.firstName} ${this.lastName}`;
    },
    allPriceTotal() {
        console.log("computed total price")
      return this.customer.reduce(
        (total, current) => (total += current.price),
        0
      );
    },
    highPrice(){
        return this.customer.filter(obj=>obj.price>200)
    }
  },
};
</script>

<style></style>
