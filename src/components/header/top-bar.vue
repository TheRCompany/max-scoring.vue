<template>
  <div class="header" :class="{ dark: dark }">
    <div class="header-container">
      <router-link :to="{ name: 'boards' }" class="icon" @click="$emit('home')">
        <img src="@/assets/icon/home.svg" />
      </router-link>

      <h1 class="center">{{ title }}</h1>

      <div class="icon" @click="toggleMenu()">
        <img src="@/assets/icon/menu.svg" />
        <dropdown :open="openMenu" :position="{ top: 30, width: 200 }">
          <slot></slot>
        </dropdown>
      </div>
    </div>
  </div>
</template>

<script>
import { dropdown } from '@/components/utils';
export default {
  name: 'TopBar',
  components: {
    dropdown,
  },
  props: {
    title: String,
    dark: Boolean,
  },
  data() {
    return {
      openMenu: false,
    };
  },
  methods: {
    toggleMenu() {
      this.openMenu = !this.openMenu;
    },
  },
};
</script>

<style scoped>
.header {
  position: relative;
  height: 44px;
}

.header-container {
  position: fixed;
  width: 100%;
  top: 32px;
  left: 0;
  z-index: 2;
  background-color: #fff;
  box-shadow: 0 2px 4px -1px rgba(0, 0, 0, 0.25);
  display: flex;
  justify-content: space-around;
  align-items: center;
  height: 44px;
}

.icon {
  padding: 6px;
  width: 28px;
  height: 30px;
  color: darkgray;
  cursor: pointer;
  position: relative;
}

.icon img {
  /* darkgray color */
  filter: invert(73%) sepia(8%) saturate(14%) hue-rotate(359deg) brightness(90%) contrast(93%);
}

.icon:hover {
  background-color: #f4f4f4;
}

/* DARK MODE */
.dark .header-container {
  background-color: #1c2938;
}
.dark .header-container h1 {
  color: #f4f4f4;
}
.dark .icon:hover {
  background-color: #10171e;
}
</style>
