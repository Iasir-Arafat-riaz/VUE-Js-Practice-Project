<template>
  <div>
    <h1>Hello {{ name }}</h1>
    <h3>Text is {{ texts }}</h3>
    <input type="text" name="" v-model="texts" />
    <button v-bind:disabled="isDisable">Test</button>
    <!-- conditonal class -->
    <h2 v-bind:class="isPromoted && 'promtMovie'">Promoted Movies</h2>
    <br />
    <h3 :class="['promtMovie', 'nColor']">For Array Bind</h3>
    <h3 v-bind:style="{ color: 'red', fontSize: size + 'px' }">
      Binding Style
    </h3>
    <h2 :style="{ color: 'green' }">style new one</h2>

    <h1>List Render</h1>
    <li v-for="(student, index) in students" :key="student">
      {{ index }}{{ student }}
    </li>
    <!-- Object List test -->
    <p v-for="(obj, key, index) in rObjectTest" :key="index">
      {{ key }} : {{ obj }}
    </p>
    <div v-for="(student, index) in students" :key="index">
      <h3 v-if="student == 'Riaz'">{{ student }}</h3>
    </div>

    <h1>Func for Methods : {{addNum(5,14)}}</h1>
  </div>

</template>

<script src="./app.js"></script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
.promtMovie {
  font-family: Impact, Haettenschweiler, "Arial Narrow Bold", sans-serif;
}
.nColor {
  color: red;
}
</style>
