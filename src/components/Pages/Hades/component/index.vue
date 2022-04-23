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
            <div>
              <img
                src="@/assets/GamePosters/Hages/HadesMainComposition/Characters/FP_Zagreus.png"
                alt="Zagreus"
              />
              <p>Zagreus</p>
            </div>
            <div>
              <img
                src="@/assets/GamePosters/Hages/HadesMainComposition/Characters/FP_Hades.png"
                alt="Hades"
              />
              <p>Hades</p>
            </div>
            <div>
              <img
                src="@/assets/GamePosters/Hages/HadesMainComposition/Characters/FP_Nyx.png"
                alt="Nyx"
              />
              <p>Nyx</p>
            </div>
            <div>
              <img
                src="@/assets/GamePosters/Hages/HadesMainComposition/Characters/FP_Achilles.png"
                alt="Achilles"
              />
              <p>Achilles</p>
            </div>
            <div>
              <img
                src="@/assets/GamePosters/Hages/HadesMainComposition/Characters/FP_Megaera.png"
                alt="Megaera"
              />
              <p>Megaera</p>
            </div>
            <div>
              <img
                src="@/assets/GamePosters/Hages/HadesMainComposition/Characters/FP_Thanatos.png"
                alt="Thanatos"
              />
              <p>Thanatos</p>
            </div>
            <div>
              <img
                src="@/assets/GamePosters/Hages/HadesMainComposition/Characters/FP_Aphrodite.png"
                alt="Aphrodite"
              />
              <p>Aphrodite</p>
            </div>
            <div>
              <img
                src="@/assets/GamePosters/Hages/HadesMainComposition/Characters/FP_Ares.png"
                alt="Ares"
              />
              <p>Ares</p>
            </div>
            <div>
              <img
                src="@/assets/GamePosters/Hages/HadesMainComposition/Characters/FP_Artemis.png"
                alt="Artemis"
              />
              <p>Artemis</p>
            </div>
            <div>
              <img
                src="@/assets/GamePosters/Hages/HadesMainComposition/Characters/FP_Athena.png"
                alt="Athena"
              />
              <p>Athena</p>
            </div>
            <div>
              <img
                src="@/assets/GamePosters/Hages/HadesMainComposition/Characters/FP_Hermes.png"
                alt="Hermes"
              />
              <p>Hermes</p>
            </div>
            <div>
              <img
                src="@/assets/GamePosters/Hages/HadesMainComposition/Characters/FP_Poseidon.png"
                alt="Poseidon"
              />
              <p>Poseidon</p>
            </div>
            <div>
              <img
                src="@/assets/GamePosters/Hages/HadesMainComposition/Characters/FP_Zeus.png"
                alt="Zeus"
              />
              <p>Zeus</p>
            </div>
            <div>
              <img
                src="@/assets/GamePosters/Hages/HadesMainComposition/Characters/FP_Chaos.png"
                alt="Chaos"
              />
              <p>Chaos</p>
            </div>
            <div>
              <img
                src="@/assets/GamePosters/Hages/HadesMainComposition/Characters/FP_Theseus.png"
                alt="Theseus"
              />
              <p>Theseus</p>
            </div>
            <p>See more characters</p>
          </div>
        </div>
      </div>
      <div class="block-style content"></div>
    </div>
  </div>
</template>

<script lang="ts" src="./index.ts" />
<style lang="scss" src="./index.scss" scoped />
