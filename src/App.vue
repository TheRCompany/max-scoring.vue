<template>
  <div id="app" :class="{ dark: dark }">
    <top-line></top-line>
    <top-bar :dark="dark" title="Max Scoring Quebec" @home="closeBoard()">
      <button @click="toggleDark()">Dark mode</button>
      <button>Settings</button>
    </top-bar>

    <router-view></router-view>
    test
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import { useStore } from 'vuex-simple';
import { topBar, topLine } from '@/components/header';
import { RootModule } from './store';

@Component({
  name: 'App',
  components: {
    topBar,
    topLine,
  },
})
export default class App extends Vue {
  private module = useStore<RootModule>(this.$store);

  get dark(): boolean {
    return this.module.dark;
  }

  toggleDark(): void {
    this.module.toggleDark();
  }

  closeBoard(): void {
    this.module.closeBoard();
  }
}
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
