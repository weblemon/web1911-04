<template>
    <div>
      <h1>管理页面</h1>
    </div>
</template>

<script>
  import admin from "../utils/http";
    export default {
        created(){
          // console.log(this.$route)
          admin.get("/sys/user/list");
        }
    }
</script>

<style scoped>

</style>