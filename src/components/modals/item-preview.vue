<template>
  <modal name="item-preview" @before-open="init" @before-close="reset" :adaptive="true">
    <div class="close" @click="hide()"></div>
    <div class="container">
      <h2>Item preview</h2>
      <div>
        <div class="row">
          <h3>{{ item.title }}</h3>
          <p>{{ item.desc }}</p>
        </div>
      </div>
    </div>
  </modal>
</template>

<script>
export default {
  name: 'item-preview',
  data() {
    return {
      item: { title: '', description: '', score: null },
    };
  },
  methods: {
    init(event) {
      if (event.params) {
        this.item = event.params.item;
      }
    },
    reset() {
      this.item = { title: '', description: '', score: null };
    },
    hide() {
      this.$modal.hide('item-preview');
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
</style>
