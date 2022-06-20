<template>
  <q-page padding class="indexPage">
    <Movies/>
  </q-page>
</template>

<script>

import { defineComponent } from 'vue'

import Movies from '../components/Movies.vue'

export default defineComponent({
  name: 'IndexPage',

  components: {
    Movies
  }
})
</script>

<style>
.indexPage{

  font-family:Helvetica, sans-serif;
}
</style>
