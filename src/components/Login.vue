<template>
  <router-link to="/boards">Login</router-link>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component({
  name: 'Login',
})
export default class Login extends Vue {}
</script>
