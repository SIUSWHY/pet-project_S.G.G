<template>
  <div class="home">
    <div v-if="getTypePC === true">
      <MainPageMobile />
    </div>
    <div v-else>
      <MainPage />
    </div>
  </div>
</template>

<script lang="ts" src="./index.ts" />
<style lang="scss" src="./index.scss" scoped />