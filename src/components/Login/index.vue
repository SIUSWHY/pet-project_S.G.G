<template>
  <v-app id="inspire" class="vertical-align">
    <v-card class="horizontal-align" max-width="400">
      <v-card-title>Login</v-card-title>
      <v-card-text>
        <v-text-field v-model="user.email" label="Email"></v-text-field>
        <v-text-field
          v-model="user.password"
          label="Password"
          :type="isHide ? 'password' : 'text'"
          :append-icon="isHide ? 'mdi-eye-off' : 'mdi-eye'"
          @click:append="isHide = !isHide"
        ></v-text-field>
      </v-card-text>

      <v-card-actions>
        <v-spacer></v-spacer>

        <v-btn
          text
          color="primary"
          @click="
            () => {
              openUpdateUserModal();
            }
          "
        >
          Sign in
        </v-btn>
      </v-card-actions>
    </v-card>
  </v-app>
</template>

<script lang="ts" src="./index.ts" />
<style lang="scss" src="./index.scss" scoped />
