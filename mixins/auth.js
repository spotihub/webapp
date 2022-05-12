import { mapState } from 'vuex'

export default {
  computed: {
    ...mapState('auth', ['loggedIn', 'user'])
  }
}
