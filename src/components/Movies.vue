<template>
  <div class="row col-12 justify-start q-ml-lg q-pl-lg">
    <div class="col-3">
      <p class="text-h4">Os mais populares</p>

    </div>
    <div class="col-2">
      <q-select  class="col-12" dense outlined  v-model="model" :options="options"></q-select>
    </div>

  </div>

  <div>
    <ul class="row col-12">
      <li class="row col-3" v-for="movie in movies" :key="movie.id">
        <div>
          <q-card class="my-card q-mt-lg">
            <q-img :src="`https://image.tmdb.org/t/p/w500/${movie.backdrop_path}`" loading="lazy" class="img"/>
            <q-card-section>
              <q-btn
                fab
                color="primary"
                icon="star"
                class="absolute"
                style="top: 0; right: 0px; transform: translateY(-50%);"
              >{{movie.vote_average}}</q-btn>
              <div>
               <q-rating :model-value="movie.vote_average" size="1em" :max="10" color="primary" ></q-rating>
              </div>
              <div class="row no-wrap items-center">
                <div class="col text-h5 ellipsis q-mb-none">
                  {{movie.title}}
                </div>
              </div>
            </q-card-section>
            <q-card-section class="q-pt-none">
              <div class="text-h6">
                {{movie.release_date}}
              </div>
            </q-card-section>
          </q-card>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>

import { defineComponent, ref, onMounted, watch } from 'vue'
import { api } from 'boot/axios'

export default defineComponent({
  name: 'IndexPage',

  setup () {
    const movies = ref([])
    const model = ref('week')

    const getMovies = async () => {
      try {
        const data = await api.get(`${model.value}?api_key=0feffc73ab098b7b158aa9491f4594db`)
        movies.value = data.data.results
      } catch (error) {

      }
    }

    onMounted(() => {
      getMovies()
    })

    watch(() => {
      getMovies()
    })

    return {
      movies,
      model,
      options: [
        'week', 'day'
      ]
    }
  }
})
</script>

<style>

.my-card {
 max-width: 300px;
 height: 550px;
}

.my-card:hover{

    opacity: 0.9;
}

.img{
 width: 300px;
 height: 430px;
}

</style>
