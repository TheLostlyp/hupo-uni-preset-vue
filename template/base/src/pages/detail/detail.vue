<template>
  <view class="base-title">
    {{msg}}
    <Button type="primary" @click="toDetail">去首页</Button>
  </view>
</template>

<script>
  export default {
    name: '',
    data() {
      return {
        msg:'详情'
      }
    },
    methods:{
      toDetail(){
        uni.redirectTo({
          url: '/pages/index/index'
        })
      }
    }
  }
</script>

<style lang="scss">
  @include b(title){
    color: red;
  }
</style>