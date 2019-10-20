<template>
  <div class="blankstate">
    <h2 v-if="title" class="title">{{ title }}</h2>
    <p v-if="desc" class="desc">{{ desc }}</p>
    <div>
      <img v-if="img" alt="blankstate" :src="img" />
    </div>
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'BlankState',
  props: {
    title: String,
    desc: String,
    img: String,
  },
};
</script>

<style scoped>
.title {
  margin: 20px 0;
  font-size: 30px;
  font-weight: 500;
  color: dodgerblue;
}

.desc {
  color: dodgerblue;
  opacity: 0.7;
}

img {
  max-height: 320px;
}
</style>
