<template>
  <modal name="board-add" @before-close="reset" :adaptive="true">
    <div class="close" @click="hide()"></div>
    <form class="container" @submit.prevent="submit">
      <h2>Add a new board</h2>
      <div>
        <input class="row" type="text" placeholder="Name your board" v-model="board.title" />
        <textarea class="row" placeholder="Description" v-model="board.description"> </textarea>
      </div>
      <button>Save</button>
    </form>
  </modal>
</template>

<script>
export default {
  name: 'board-add',
  data() {
    return {
      board: { title: '', description: '' },
    };
  },
  methods: {
    reset() {
      this.board = { title: '', description: '' };
    },
    hide() {
      this.$modal.hide('board-add');
    },
    submit() {
      this.$emit('save', this.board);
      this.hide();
    },
  },
};
</script>

<style scoped>
.close {
  position: absolute;
  cursor: pointer;
  right: 10px;
  top: 10px;
  width: 32px;
  height: 32px;
  opacity: 0.3;
}
.close:hover {
  opacity: 1;
}
.close:before,
.close:after {
  position: absolute;
  left: 15px;
  content: ' ';
  height: 33px;
  width: 2px;
  background-color: #333;
}
.close:before {
  transform: rotate(45deg);
}
.close:after {
  transform: rotate(-45deg);
}

.container {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: calc(100% - 20px);
  margin: 10px;
}

.row {
  display: flex;
  width: 100%;
  justify-content: space-between;
  margin: 10px 0;
}

input,
textarea {
  box-sizing: border-box;
  margin-bottom: 4px;
  font-size: 12px;
  line-height: 2;
  border: 0;
  border-bottom: 1px solid #dddedf;
  padding: 4px 8px;
  font-family: inherit;
  transition: 0.5s all;
  outline: none;
}

button {
  background: white;
  border-radius: 4px;
  box-sizing: border-box;
  padding: 10px;
  letter-spacing: 1px;
  font-family: 'Open Sans', sans-serif;
  font-weight: 400;
  color: #8b8c8d;
  cursor: pointer;
  border: 1px solid #dddedf;
  text-transform: uppercase;
  transition: 0.1s all;
  font-size: 10px;
  outline: none;
}

button:hover {
  border-color: #c7c8c9;
  color: #6f7071;
}
</style>
