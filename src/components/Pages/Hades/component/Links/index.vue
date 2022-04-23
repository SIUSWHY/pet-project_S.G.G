<template>
  <div>
    <div class="container">
      <div class="position">
        <div class="block-style">
          <div class="title">Items</div>
          <div class="items-position">
            <div v-for="item in menuList" :key="item.to">
              <router-link :to="item.to" active-class="active">
                <img :src="require('@/assets/' + item.img)" :alt="item.title" />
                {{ item.title }}
              </router-link>
            </div>
          </div>
        </div>
        <br />
        <div class="block-style">
          <div class="title">Characters</div>
          <div class="items-position">
            <div v-for="item in characterList" :key="item.to">
              <router-link :to="item.to" active-class="active">
                <img :src="require('@/assets/' + item.img)" :alt="item.title" />
                {{ item.title }}
              </router-link>
            </div>

            <p class="none">
              See more
              <router-link to="all_characters"> characters </router-link>
            </p>
          </div>
        </div>
      </div>
      <div class="block-style content"></div>
    </div>
  </div>
</template>

<script lang="ts" src="./index.ts" />
<style lang="scss" src="./index.scss" scoped />
