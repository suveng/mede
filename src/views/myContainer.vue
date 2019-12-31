<template>
    <div class="my-container" >
        <el-container>
            <el-main>
                <Markdown :height="mdHeight"/>
            </el-main>
        </el-container>
    </div>
</template>

<script>
  import Markdown from 'vue-meditor';
  export default {
    name: "myContainer",
      components: {
        Markdown
      },
      data: function () {
        return {
          mdHeight: 1000
        }
      },
      mounted() {
        //设置高度
        this.getMdHeight();
      },
      methods: {
        getMdHeight() {
          let windowHeight = window.innerHeight - 80;
          console.log(windowHeight);
          this.mdHeight = windowHeight;
        }
      }
  }
</script>

<style scoped>
    .notFound {
        width: 100%;
        height: 100%;
        overflow: hidden;
        align-content: center;
    }

</style>