<template>
  <div class="header" :class="{ dark: dark }">
    <div class="header-container">
      <div class="item">
        <h3 class="title" v-if="!editMode">{{ board.title }}</h3>

        <input class="edit" type="text" v-if="editMode" v-model="board.title" v-on:keyup.enter="edit(board)" />

        <div class="icon" v-if="!editMode" @click="editMode = true">
          <img src="@/assets/icon/pencil.svg" />
        </div>

        <div class="icon" v-if="editMode" @click="edit(board)">
          <img src="@/assets/icon/checked.svg" />
        </div>
      </div>

      <div class="item">
        <div class="icon" @click="$modal.show('item-add-edit')">
          <img src="@/assets/icon/add.svg" />
        </div>
      </div>

      <div class="item">
        <router-link :to="{ name: 'boards' }" class="icon" @click="close()">
          <img src="@/assets/icon/cancel.svg" />
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'score-bar',
  props: {
    board: {
      id: String,
      title: String,
      description: String,
    },
    dark: Boolean,
  },
  data() {
    return {
      editMode: false,
    };
  },
  methods: {
    edit(board) {
      this.editMode = false;
      this.$store.commit('editActiveBoard', board);
    },
    close() {
      this.$store.commit('closeBoard');
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
  display: flex;
  align-items: center;
  padding: 10px 20px;
}

.item + .item {
  content: '';
  border-left: 1px solid darkgray;
}

.item {
  display: flex;
  align-items: center;
  padding: 0 6px;
}

.title {
  margin-right: 10px;
}

.edit {
  box-sizing: border-box;
  font-size: 16px;
  line-height: 2;
  border: 0;
  border-bottom: 1px solid #dddedf;
  font-family: inherit;
  transition: 0.5s all;
  outline: none;
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
  width: 100%;
  height: 100%;
  /* darkgray color */
  filter: invert(73%) sepia(8%) saturate(14%) hue-rotate(359deg) brightness(90%) contrast(93%);
}

.icon:hover {
  background-color: #f4f4f4;
}

/* DARK MODE */
.dark .header-container h3 {
  color: #f4f4f4;
}
.dark .icon:hover {
  background-color: #1c2938;
}
.dark .item + .item {
  border-left: 1px solid white;
}

.dark .edit {
  color: white;
}
</style>
