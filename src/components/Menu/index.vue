<template>
  <div class="menu-header">
    <router-link to="/">
      <img style="height: 64px" src="../../assets/logo.png" alt="logo" />
    </router-link>
    <nav class="menu">
      <div>
        <ul class="color">
          <router-link to="/bastion">BASTION</router-link>
          <router-link to="/transistor">TRANSISTOR</router-link>
          <router-link to="/pyre">PYRE</router-link>
          <router-link to="/hades">HADES</router-link>
        </ul>
      </div>
    </nav>
  </div>
</template>

<script lang="ts" src="./index.ts" />
<style lang="scss" src="./index.scss" scoped />
