<template>
  <v-app id="inspire">
    <v-data-table
      v-model="selected"
      :headers="headers"
      :items="$store.state.usersList.users"
      item-key="_id"
      show-select
      class="elevation-1"
    >
      <template v-slot:item.avatar="{ item }">
        <v-avatar size="48">
          <img v-if="item.avatar !== ''" :src="require('@/assets/' + item.avatar)" alt="avatar" />
          <v-icon size="48" v-else> mdi-account-circle </v-icon>
        </v-avatar>
      </template>
    </v-data-table>
  </v-app>
</template>

<script lang="ts" src="./index.ts" />
<style lang="scss" src="./index.scss" scoped />
