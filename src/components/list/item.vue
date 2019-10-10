<template>
  <div class="item" :class="{ dark: dark }" :style="{ borderTopColor: item.color }">
    <div class="container">
      <div class="score" :style="{ background: item.color }">
        {{ item.score }}
      </div>
      <div class="content">
        <h3 class="title">{{ item.title }}</h3>
        <p class="description">{{ item.description }}</p>
      </div>
      <div class="side" @click.stop="toggleSideMenu()">
        <svg viewBox="0 0 24 24" class="icon">
          <g>
            <path
              d="M20.207 8.147c-.39-.39-1.023-.39-1.414 0L12 14.94 5.207 8.147c-.39-.39-1.023-.39-1.414 0-.39.39-.39 1.023 0 1.414l7.5 7.5c.195.196.45.294.707.294s.512-.098.707-.293l7.5-7.5c.39-.39.39-1.022 0-1.413z"
            ></path>
          </g>
        </svg>
        <dropdown :open="openSideMenu" :position="{ top: 26 }">
          <slot></slot>
        </dropdown>
      </div>
    </div>
  </div>
</template>

<script>
import { dropdown } from '@/components/utils';
export default {
  name: 'item',
  components: {
    dropdown,
  },
  props: {
    dark: Boolean,
    item: {
      title: String,
      description: String,
      score: String | Number,
      color: String,
    },
  },
  data() {
    return {
      openSideMenu: false,
    };
  },
  methods: {
    toggleSideMenu() {
      this.openSideMenu = !this.openSideMenu;
    },
  },
};
</script>

<style scoped>
.item {
  border-top: solid 5px darkgrey;
  background-color: white;
  border-radius: 4px;
  box-shadow: 0 0 18px 0 rgba(45, 45, 45, 0.08);

  width: 100%;
  margin: 10px auto;
}

.container {
  display: flex;
  align-items: center;
}

.score {
  background-color: darkgrey;

  display: flex;
  flex-shrink: 0;
  align-items: center;
  justify-content: center;
  height: 40px;
  width: 40px;
  margin: 16px;
  border-radius: 100%;
  font-weight: 600;
}

.content {
  display: flex;
  flex-direction: column;
  width: 100%;
  padding: 12px 0;
}

.content .title {
  margin: 0;
  font-weight: 500;
}

.content .description {
  margin: 0;
}

.side {
  align-self: flex-start;
  position: relative;
  margin: 5px;
  width: 26px;
  height: 26px;
  padding: 5px;
  cursor: pointer;
  display: flex;
  flex-shrink: 0;
}

.side:hover {
  background-color: #f4f4f4;
  border-radius: 100%;
}

.side .icon {
  width: 16px;
  height: 16px;
}

/* DARK MODE */
.dark .container {
  background-color: #1c2938;
  color: #f4f4f4;
}
</style>
