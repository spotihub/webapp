<template>
  <v-card max-width="50rem" outlined>
    <v-list-item three-line>
      <v-list-item-content>
        <v-list-item-title class="text-h5 mb-1">
          Not connected
        </v-list-item-title>
        <v-list-item-subtitle>Please sign in to start using with SpotiHub.</v-list-item-subtitle>
      </v-list-item-content>

      <!-- <v-list-item-avatar tile size="80" color="grey"></v-list-item-avatar> -->
    </v-list-item>

    <v-card-actions>
      <v-btn class="ml-auto" text>
        Sign in with GitHub
      </v-btn>
    </v-card-actions>
  </v-card>
</template>

<script>
export default {
  name: 'GithubLoginCard',
  data() {
    return {}
  }
}
</script>
