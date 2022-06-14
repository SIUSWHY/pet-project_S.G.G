<template>
  <table>
    <tr>
      <td colspan="2" class="pb-6">
        <v-card min-width="1000" class="ma-0">
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
      </td>
      <td rowspan="2" class="custom">
        <v-card class="ml-4">
          <v-timeline align-top :dense="$vuetify.breakpoint.smAndDown">
            <v-timeline-item
              v-for="(item, i) in items"
              :key="i"
              :color="item.color"
              :icon="item.icon"
              fill-dot
            >
              <template v-slot:opposite>
                <span>2022-06-02</span>
              </template>
              <v-card :color="item.color" dark>
                <v-card-title class="text-h6 custom-width">
                  <v-avatar class="pr-2">
                    <v-img
                      src="https://avataaars.io/?avatarStyle=Circle&topType=LongHairStraight&accessoriesType=Blank&hairColor=BrownDark&facialHairType=Blank&clotheType=BlazerShirt&eyeType=Default&eyebrowType=Default&mouthType=Default&skinColor=Light"
                    ></v-img>
                  </v-avatar>
                  {{ item.name }}
                  {{ item.massege }}
                </v-card-title>
              </v-card>
            </v-timeline-item>
          </v-timeline>
        </v-card>
      </td>
    </tr>
    <tr>
      <td colspan="2"><Calendar /></td>
    </tr>
  </table>
</template>

<script lang="ts" src="./index.ts" />
<style lang="scss" src="./index.scss" scoped />
