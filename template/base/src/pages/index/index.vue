<template>
  <view class="base-title">
    默认模板{{msg}}
    <Button type="primary" @click="toDetail">去详情</Button>
  </view>
</template>

<script>
  export default {
    name: '',
    data() {
      return {
        msg:'首页'
      }
    },
    mounted(){
      console.log(this)
    },
    methods:{
      toDetail(){
        uni.navigateTo({
          url: '/pages/detail/detail'
        })
      }
    }
  }
</script>

<style lang="scss">
</style>