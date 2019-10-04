<template>
  <div class="topline">
    <a class="nav">Login/Logout</a>
    <span class="nav">{{ $t('top.language') }}:</span>
    <select class="lang" v-model="$i18n.locale">
      <option v-for="(lang, i) in langs" :key="`Lang${i}`" :value="lang">{{ lang }}</option>
    </select>
  </div>
</template>

<script>
export default {
  name: 'top-line',
  data() {
    return {
      langs: ['en', 'fr'],
    };
  },
};
</script>

<style scoped>
.topline {
  display: flex;
  justify-content: flex-end;
  align-items: center;
  background-color: #383838;
  padding: 5px;
}

.nav {
  color: white;
  text-decoration: none;
  padding: 0 0.625em;
}

.nav:hover:not(span) {
  text-decoration: underline;
}

.nav + .nav {
  content: '';
  border-left: 1px solid white;
}

select {
  padding: 0.25em 0.35em;
  border: none;
  border-radius: 0.25em;
  background-color: #f1f1f1;
}
</style>
