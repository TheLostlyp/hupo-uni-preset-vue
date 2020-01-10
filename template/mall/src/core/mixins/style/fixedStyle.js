export default {
  methods: {
    fixedStyle(style = {}) {
      const styles = {
        position: 'fixed'
      }
      const { left = null, right = null, top = 0, bottom = null, zIndex = null } = style
      if (bottom === null) {
        styles.top = `${this._calcTop(top)}rpx`
      } else {
        styles.bottom = `${this._calcBottom(bottom)}rpx`
      }
      if (zIndex !== null) {
        styles['z-index'] = zIndex
      }
      if (left !== null) {
        styles.left = `${left}rpx`
      }
      if (right !== null) {
        styles.right = `${right}rpx`
      }
      return this.transformStyle(styles)
    }
  }
}
