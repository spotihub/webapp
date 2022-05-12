export default {
  data () {
    return {
      isMounted: false
    }
  },
  mounted () {
    this.isMounted = true
  },
  computed: {
    isMobile () {
      return (
        this.isMounted && ['xs', 'sm'].includes(this.$vuetify.breakpoint.name)
      )
    },
    isMobileOrTablet () {
      return (
        this.isMounted && ['xs', 'sm', 'md'].includes(this.$vuetify.breakpoint.name)
      )
    }
  }
}
