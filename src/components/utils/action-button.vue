<template>
  <button :class="`-${type}`" @click="$emit('click')">
    <slot></slot>
  </button>
</template>

<script>
export default {
  name: 'action-button',
  props: {
    type: {
      type: String,
      default: 'primary',
    },
  },
};
</script>

<style scoped>
button {
  border: none;
  padding: 12px 16px;
  font-size: 16px;
  cursor: pointer;
}

.-primary {
  background-color: DodgerBlue;
  color: white;
}
.-primary:hover {
  background-color: darkgray;
}

.-secondary {
  background-color: darkgray;
  color: white;
}
.-secondary:hover {
  background-color: dimgrey;
}
</style>
