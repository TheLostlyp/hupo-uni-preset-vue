<script>
  export default {  
      onLaunch() {  
          console.log('App Launch，app启动')  
      },  
      onShow() {  
          console.log('App Show，app展现在前台')  
      },  
      onHide() {  
          console.log('App Hide，app不再展现在前台')  
      }  
  }  
</script>

<style lang="scss">
/*  #ifdef H5 */
html,
body {
  margin: 0;
}
uni-view {
  display: block;
}
/*  #endif  */
</style>
