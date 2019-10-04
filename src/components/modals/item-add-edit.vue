<template>
  <modal name="item-add-edit" @before-open="init" @before-close="reset" :adaptive="true">
    <div class="close" @click="hide()"></div>
    <form class="container" @submit.prevent="submit">
      <h2 v-if="!editMode">Add a new item</h2>
      <h2 v-if="editMode">Edit item</h2>
      <div>
        <div class="row">
          <input type="text" placeholder="Title" v-model="item.title" />
          <input type="number" min="0" max="100" placeholder="Score" v-model="item.score" />
        </div>
        <textarea class="row" placeholder="Description" v-model="item.desc"> </textarea>
      </div>
      <button>Save</button>
    </form>
  </modal>
</template>

<script>
export default {
  name: 'item-add-edit',
  data() {
    return {
      item: { title: '', desc: '', score: null },
      editMode: false,
    };
  },
  methods: {
    init(event) {
      if (event.params) {
        this.item = event.params.item;
        this.editMode = true;
      }
    },
    reset() {
      this.item = { title: '', desc: '', score: null };
      this.editMode = false;
    },
    hide() {
      this.$modal.hide('item-add-edit');
    },
    submit() {
      this.$emit('save', this.item, this.editMode);
      this.editMode = false;
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
input[type='text'] {
  width: 70%;
}
input[type='number'] {
  width: 20%;
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
