<template>
   
  <div>
    {{ formValues }}
  </div>
  <h2 v-pre>{{test}}</h2>
  <button @click="test='testing'">T-Btn</button>
  <br />
  <form @submit.prevent="formSubmit" action="">
    <div>
      <label for="name">Name</label>
      <input type="text" id="name" v-model="formValues.name" />
    </div>
    <div>
      <label for="profile">Profile Summary</label>
      <input type="text" id="profile" v-model="formValues.profileSummary" />
    </div>
    <div>
      <label for="country">Select Country</label>
      <select id="country" v-model="formValues.country">
        <option value="">Select a Country</option>
        <option value="india">India</option>
        <option value="russia">Russia</option>
        <option value="usa">USA</option>
      </select>
    </div>
    <div>
      <label for="location">Job Location</label>
      <select id="location" multiple v-model="formValues.jobLocation">
        <option value="india">India</option>
        <option value="russia">Russia</option>
        <option value="usa">USA</option>
      </select>
    </div>
    <div>
      <input
        type="checkbox"
        id="remote"
        v-model="formValues.remoteWork"
        true-value="yes"
        false-value="no"
      />
      <label for="remote"> Remote Work ?</label>
    </div>
    <div>
      <input
        type="checkbox"
        id="html"
        value="html"
        v-model="formValues.skillSet"
      />
      <label for="html">HTML</label>
      <input
        type="checkbox"
        id="css"
        value="css"
        v-model="formValues.skillSet"
      />
      <label for="css">CSS</label>
      <input
        type="checkbox"
        id="javaScript"
        value="JavaScript"
        v-model="formValues.skillSet"
      />
      <label for="javaScript">JavaScript</label>
    </div>
    <div>
      <input
        type="radio"
        id="1-2"
        value="1-2"
        v-model="formValues.experience"
      />
      <label for="1-2">1-2 Years</label>
      <input
        type="radio"
        id="2-3"
        value="2-3"
        v-model="formValues.experience"
      />
      <label for="2-3">2-3 Years</label>
      <input
        type="radio"
        id="3-4"
        value="3-4"
        v-model="formValues.experience"
      />
      <label for="3-4">3-4 Years</label>
    </div>
    <button type="submit">Submit</button>
  </form>
</template>

<script>
export default {
    name:"InputField",
    props:[],
  data() {
    return {
      formValues: {
        name: "",
        profileSummary: "",
        country: "",
        jobLocation: [],
        remoteWork: "no",
        skillSet: [],
        experience: "",
        
      },
      test:"test"
    };
  },
  methods: {
    formSubmit() {
    //   e.preventDefault();
      console.log(this.formValues);
    },
  },
};
</script>

<style>
label {
  font-weight: bold;
  display: flex;
  margin-bottom: 5px;
  margin-top: 10px;
}
input + label {
  font-weight: bold;
  display: inline-flex;
  margin-right: 20px;
}

input[type="text"],
textarea,
select {
  display: block;
  width: 400px;
  padding: 6px 12px;
  font-size: 14px;
  line-height: 1.5;
  color: gray;
  background-color: white;
  background-image: none;
}
</style>
