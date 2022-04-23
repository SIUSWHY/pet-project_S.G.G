<template>
  <router-link active-class="active" to="require(item.to)">
    <img src="require(item.img)" alt="item.title" />
    <p>{{ item.title }}</p>
  </router-link>
</template>

<script lang="ts" src="./index.ts" />
<style lang="scss" src="./index.scss" scoped />
