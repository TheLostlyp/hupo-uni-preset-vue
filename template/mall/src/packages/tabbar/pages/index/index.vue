<template>
  <h-page
    :title="tabbar[currentTabbarIndex].title"
    :background="tabbar[currentTabbarIndex].background"
    :type="tabbar[currentTabbarIndex].type"
  >
    <view v-show="currentTabbarIndex === 0">
      <mall-home v-if="tabbar[0].loaded"></mall-home>
    </view>
    <view v-show="currentTabbarIndex === 1">
      <mall-my v-if="tabbar[1].loaded"></mall-my>
    </view>
    <h-tabbar @tabbarclick="handleTabbarClick" :selectedIndex="currentTabbarIndex" :tabbar="tabbar"></h-tabbar>
  </h-page>
</template>

<script>
import mallHome from '../../components/home/home'
import mallMy from '../../components/my/my'
export default {
  components: { mallHome, mallMy },
  data() {
    return {
      tabbar: [
        {
          text: '首页',
          loaded: false,
          title: '琥珀亲子',
          background: 'BgC3',
          type: 'primary',
          icon: require('@images/tabbar/index.png'),
          selectedIcon: require('@images/tabbar/index-active.png')
        },
        {
          text: '我的',
          loaded: false,
          title: '我的',
          background: 'BgC2',
          type: 'primary',
          icon: require('@images/tabbar/my.png'),
          selectedIcon: require('@images/tabbar/my-active.png')
        }
      ]
    }
  },
  computed: {
    currentTabbarIndex: {
      get() {
        console.log(this);
        
        return this.$store.state.tabbar.index
      },
      set(val) {
        this.$store.commit('tabbar/switch', val)
      }
    }
  },
  watch: {
    currentTabbarIndex: {
      handler(val) {
        if (!this.tabbar[val].loaded) {
          this.tabbar[val].loaded = true
        }
      },
      immediate: true
    }
  },
  methods: {
    handleTabbarClick(event) {
      const { index } = event
      this.currentTabbarIndex = index
      this.tabbar[index].loaded = true
    }
  }
}

</script>
<style lang="scss">
</style>
