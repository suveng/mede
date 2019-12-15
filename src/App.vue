<template>
  <div id="app">
    <Index></Index>
  </div>
</template>
<script>
  import Index from "./views/Index";

  export default {
    name: "index",
    components: {
      Index
    },
    data: function () {
      return {
        mdHeight: 1000
      }
    },
  }
</script>

