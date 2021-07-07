<template>
  <modal name="color-picker" :adaptive="true" @before-open="beforeOpen">
    <div class="close" @click="hide()"></div>
    <div class="container">
      <h2>Pick a color</h2>
      <div class="palette">
        <div v-for="color in colors" :key="color" class="color" @click="select(color)">
          <div class="preview" :style="{ background: color }"></div>
        </div>
      </div>
    </div>
  </modal>
</template>

<script>
export default {
  name: 'ColorPicker',
  data() {
    return {
      item: null,
      colors: ['#d11141', '#f37735', '#ffc425', '#00b159', '#00aedb'],
    };
  },
  methods: {
    beforeOpen(event) {
      this.item = event.params.item;
    },
    hide() {
      this.$modal.hide('color-picker');
    },
    select(color) {
      this.$emit('update', { ...this.item, color });
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
  height: calc(100% - 20px);
  margin: 10px;
}
.palette {
  display: flex;
  width: 100%;
  height: 100%;
  justify-content: center;
  padding: 20px 0;
  /* align-items: center; */
}
.color {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: 10px;
  width: 50px;
  height: 50px;
  border-radius: 2px;
  border: solid 1px lightgrey;
  cursor: pointer;
}
.color:hover {
  opacity: 0.8;
}
.preview {
  width: 40px;
  height: 40px;
}
</style>
