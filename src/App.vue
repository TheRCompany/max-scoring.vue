<template>
  <div id="app" :class="{ dark: dark }">
    <!-- <top-line></top-line>
    <top-bar :dark="dark" title="Max Scoring Quebec" @home="closeBoard()">
      <button @click="toggleDark()">Dark mode</button>
      <button>Settings</button>
    </top-bar>

    <router-view></router-view> -->
    test
  </div>
</template>

<script>
// import { topBar, topLine } from '@/components/header';

export default {
  name: 'App',
  components: {
    // topBar,
    // topLine,
  },
  computed: {
    dark: {
      get() {
        // return this.$store.state.dark;
        return true;
      },
    },
  },
  // methods: {
  //   toggleDark() {
  //     this.$store.commit('toggleDark');
  //   },
  //   closeBoard() {
  //     this.$store.commit('closeBoard');
  //   },
  // },
};
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;

  text-align: center;
  color: #2c3e50;

  width: 100%;
  height: 100%;
}

.dark {
  background-color: #10171e;
}
</style>
