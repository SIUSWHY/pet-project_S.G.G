<template>
  <v-app id="inspire">
    <v-card max-width="1000">
      <v-sparkline
        :value="count"
        :gradient="sparklineData.gradient"
        :smooth="sparklineData.radius || false"
        :padding="sparklineData.padding"
        :line-width="sparklineData.width"
        :stroke-linecap="sparklineData.lineCap"
        :labels="sparklineData.labels"
        :gradient-direction="sparklineData.gradientDirection"
        :fill="sparklineData.fill"
        :type="sparklineData.type"
        :auto-line-width="sparklineData.autoLineWidth"
        auto-draw
      ></v-sparkline>

      <v-card-text class="pt-0">
        <div class="text-h6 font-weight-light mb-2">User Registrations</div>
        <div class="subheading font-weight-light grey--text">Last Campaign Performance</div>
        <v-divider class="my-2"></v-divider>
        <v-btn :loading="isLoading" @click="setData" icon>
          <v-icon> mdi-refresh</v-icon>
        </v-btn>
        <v-icon class="mr-2" small> mdi-clock </v-icon>
        <span class="text-caption grey--text font-weight-light"
          >last registration 26 minutes ago</span
        >
      </v-card-text>
    </v-card>
  </v-app>
</template>

<script lang="ts" src="./index.ts" />
<style lang="scss" src="./index.scss" scoped />
