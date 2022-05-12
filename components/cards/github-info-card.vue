<template>
  <v-card max-width="50rem" outlined>
    <v-list-item three-line>
      <v-list-item-content>
        <v-list-item-title class="text-h5 mb-1">
          Connected
        </v-list-item-title>
        <v-list-item-subtitle>Logged in as {{user.username}}</v-list-item-subtitle>
      </v-list-item-content>

      <!-- <v-list-item-avatar tile size="80" color="grey"></v-list-item-avatar> -->
    </v-list-item>

    <v-card-actions>
      <v-btn class="ml-auto" text @click="logout">
        Logout
      </v-btn>
    </v-card-actions>
  </v-card>
</template>

<script>
import auth from '~/mixins/auth'
import device from '~/mixins/device'

export default {
  name: 'GithubInfoCard',
  mixins: [auth, device],
  data() {
    return {}
  },
  methods: {
    logout() {
      this.$auth.logout()
      .then(() => this.$nuxt.$router.replace({ path: '/' }));
    }
  }
}
</script>
