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
            "https://raw.githubusercontent.com/faridsurya/Vue-Axios-Basic/master/contents/header.json"
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