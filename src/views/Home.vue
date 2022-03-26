<template>
  <div class="home">
    <MainPage />
  </div>
</template>

<script lang="ts">
  import { Component, Vue } from 'vue-property-decorator';
  import MainPage from '/src/components/Home/MainPage/index.vue'; // @ is an alias to /src

  @Component({
    components: {
      MainPage,
    },
  })
  export default class Home extends Vue { }
</script>