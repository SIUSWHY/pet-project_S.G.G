<template>
  <v-app>
    <v-navigation-drawer app>
      <v-card class="mx-auto">
        <v-navigation-drawer permanent>
          <v-list-item>
            <v-list-item-content>
              <v-list-item-title class="text-h6"> Dashboard </v-list-item-title>
            </v-list-item-content>
          </v-list-item>

          <v-divider></v-divider>

          <v-list dense nav>
            <v-list-item v-for="item in items" :key="item.title" link :to="item.link">
              <v-list-item-icon>
                <v-icon>{{ item.icon }}</v-icon>
              </v-list-item-icon>

              <v-list-item-content>
                <v-list-item-title>{{ item.title }}</v-list-item-title>
              </v-list-item-content>
            </v-list-item>
          </v-list>
        </v-navigation-drawer>
      </v-card>
      <template v-slot:append>
        <div class="pa-2">
          <v-btn block> Logout </v-btn>
        </div>
      </template>
    </v-navigation-drawer>

    <v-app-bar dense app>
      <v-btn :loading="isLoading" @click="refreshData()" icon>
        <v-icon> mdi-refresh</v-icon>
      </v-btn>
      <v-btn @click="openModal()" icon>
        <v-icon>mdi-plus</v-icon>
      </v-btn>
      <v-btn :disabled="isDisableTools.deleteTool" @click="deleteUsers()" icon>
        <v-icon>mdi-trash-can</v-icon>
      </v-btn>
      <v-btn :disabled="isDisableTools.additTool" icon>
        <v-icon>mdi-pencil</v-icon>
      </v-btn>
      <v-btn icon>
        <v-icon>mdi-magnify</v-icon>
      </v-btn>
      <v-dialog v-model="isDialogOpen" max-width="500px">
        <v-card>
          <v-card-title>Create User</v-card-title>
          <v-card-text>
            <v-text-field v-model="user.username" label="Username"></v-text-field>
            <v-text-field v-model="user.name" label="Name"></v-text-field>
            <v-text-field v-model="user.email" label="Email"></v-text-field>
            <v-text-field
              v-model="user.password"
              label="Password"
              :type="isHide ? 'text' : 'password'"
              :append-icon="isHide ? 'mdi-eye' : 'mdi-eye-off'"
              @click:append="isHide = !isHide"
            ></v-text-field>
            <v-file-input
              accept="image/png, image/jpeg, image/bmp"
              placeholder="Pick an avatar"
              v-model="user.avatar"
              name="avatar"
              prepend-icon=""
              label="Avatar"
            ></v-file-input>
            <v-autocomplete v-model="user.role" :items="roles" label="Role" />
          </v-card-text>

          <v-card-actions>
            <v-spacer></v-spacer>

            <v-btn
              text
              color="primary"
              @click="
                () => {
                  postUser();
                  isDialogOpen = !isDialogOpen;
                }
              "
            >
              Submit
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-dialog>
    </v-app-bar>

    <!-- Sizes your content based upon application components -->
    <v-main>
      <!-- Provides the application the proper gutter -->
      <v-container fluid>
        <router-view></router-view>
      </v-container>
    </v-main>

    <!-- <v-footer app>
    </v-footer> -->
  </v-app>
</template>

<script lang="ts" src="./index.ts" />
<style lang="scss" src="./index.scss" scoped />
