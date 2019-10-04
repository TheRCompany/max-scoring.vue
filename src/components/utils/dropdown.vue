<template>
  <div
    class="dropdown"
    :style="{
      top: position && position.top + 'px',
      right: position && position.right + 'px',
      width: position && position.width + 'px',
    }"
    :class="{ '-open': open, dark: dark }"
  >
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'dropdown',
  props: {
    dark: Boolean,
    open: Boolean,
    position: {
      top: Number,
      right: Number,
      width: Number,
    },
  },
};
</script>

<style scoped>
.dropdown {
  display: none;
  position: absolute;
  top: 0;
  right: 0;
  width: 100px;
  z-index: 2;
  border-radius: 2px;
  background-color: #ffffff;
  box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23);
  transform: scale(0.9);
  transform-origin: top right;
  transition: all 0.2s;
}

.dropdown.-open {
  display: block;
  opacity: 1;
  transform: scale(1);
}

button {
  cursor: pointer;
  border: none;
  width: 100%;
  padding: 0.5em 1.5rem;
  font-size: 12px;
}

button:hover,
button:focus {
  background-color: #eeeeee;
  outline: none;
}

/* DARK MODE */
.dark .dropdown {
  background-color: #1c2938;
}

.dark button {
  color: #f4f4f4;
}

.dark button:hover,
.dark button:focus {
  background-color: #10171e;
}
</style>
