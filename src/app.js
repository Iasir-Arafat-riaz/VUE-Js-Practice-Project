export default {
  names: "App",
  data() {
    return {
      name: "riaz",
      texts: "",
      isDisable: true,
      isPromoted: true,
      orngColor: "orange",
      size: 50,
      students: ["arafat", "kamal", "monju", "rahman", "tumpa", "Riaz"],
      rObjectTest: { name: "riaz", age: 32, good: true },
    };
  },
  methods: {
    addNum(a,b){
        return a+b+this.size;

    }
  },
};
