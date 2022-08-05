Vue.createApp({
  data() {
    return {
      message: "Hello Vue!",
      header: {},
    };
  },
  methods: {
    getHeaderData()
    {
      axios
        .get(
          "https://raw.githubusercontent.com/romanofajarikhsan/Tekweb2/main/content/header.json"
        )
        .then((res) => {
          console.log(res.data);
          this.header = res.data;
        })
        .catch((error) => {
          console.log(error);
        });
    }
  },
  beforeMount() {
    this.getHeaderData()
  },
}).mount("#app");