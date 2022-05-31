<template>
  <v-app id="inspire">
    <v-app-bar dense app>
      <v-btn :loading="isLoading" @click="refreshData()" icon>
        <v-icon> mdi-refresh</v-icon>
      </v-btn>
      <v-btn @click="openAddNewUserModal()" icon>
        <v-icon>mdi-plus</v-icon>
      </v-btn>
      <v-btn :disabled="isDisableTools.deleteTool" @click="deleteUsers()" icon>
        <v-icon>mdi-trash-can</v-icon>
      </v-btn>
      <v-btn :disabled="isDisableTools.additTool" @click="openUpdateUserModal()" icon>
        <v-icon>mdi-pencil</v-icon>
      </v-btn>
      <v-btn icon>
        <v-icon>mdi-magnify</v-icon>
      </v-btn>
      <v-dialog v-model="isCreateNewUserDialogOpen" max-width="500px">
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
                  openAddNewUserModal();
                }
              "
            >
              Add new user
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-dialog>
      <v-dialog v-model="isUpdateUserDialogOpen" max-width="500px">
        <v-card>
          <v-card-title>Create User</v-card-title>
          <v-card-text>
            <v-text-field v-model="user.username" label="Username"></v-text-field>
            <v-text-field v-model="user.name" label="Name"></v-text-field>
            <v-text-field v-model="user.email" label="Email"></v-text-field>
            <v-text-field
              v-model="user.password"
              label="Password"
              :type="isHide ? 'password' : 'text'"
              :append-icon="isHide ? 'mdi-eye-off' : 'mdi-eye'"
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
                  openUpdateUserModal();
                }
              "
            >
              Add new user
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-dialog>
    </v-app-bar>
    <v-data-table
      v-model="selected"
      :headers="headers"
      :items="$store.state.usersList.users"
      item-key="_id"
      show-select
      class="elevation-1"
      :items-per-page="countItemsOnPage"
    >
      <template v-slot:item.avatar="{ item }">
        <v-avatar class="avatar-margin" @click="resize()" :size="Size">
          <img
            v-if="item.avatar !== ''"
            :src="`data:image/png;base64,${item.avatar.image}`"
            alt="avatar"
          />
          <v-icon size="48" v-else> mdi-account-circle </v-icon>
        </v-avatar>
      </template>
    </v-data-table>
  </v-app>
</template>

<script lang="ts" src="./index.ts" />
<style lang="scss" src="./index.scss" scoped />
