<template>
  <v-app id="inspire">
    <v-row class="fill-height">
      <v-col class="max-width">
        <v-sheet height="64">
          <v-toolbar flat>
            <v-btn outlined class="mr-4" color="grey darken-2" @click="setToday"> Today </v-btn>
            <v-btn fab text small color="grey darken-2" @click="prev">
              <v-icon small> mdi-chevron-left </v-icon>
            </v-btn>
            <v-btn fab text small color="grey darken-2" @click="next">
              <v-icon small> mdi-chevron-right </v-icon>
            </v-btn>
            <v-toolbar-title v-if="$refs.calendar">
              {{ $refs.calendar.title }}
            </v-toolbar-title>
            <v-spacer></v-spacer>
            <v-btn fab text small @click="openAddNewEventModal">
              <v-icon> mdi-plus </v-icon>
            </v-btn>
            <v-dialog v-model="isAddNewEventModalOpen" max-width="500px">
              <v-card>
                <v-card-title>Add new event</v-card-title>
                <v-card-text>
                  <v-autocomplete v-model="event.name" :items="data.names" label="Event Name" />
                  <v-autocomplete v-model="event.color" :items="data.colors" label="Color" />
                  <v-text-field v-model="event.details" label="Datails"></v-text-field>

                  <v-menu
                    ref="menu"
                    :close-on-content-click="false"
                    transition="scale-transition"
                    offset-y
                    min-width="auto"
                  >
                    <template v-slot:activator="{ on, attrs }">
                      <v-text-field
                        v-model="event.dates"
                        label="Event date"
                        prepend-icon="mdi-calendar"
                        readonly
                        v-bind="attrs"
                        v-on="on"
                      ></v-text-field>
                    </template>
                    <v-date-picker
                      v-model="event.dates"
                      first-day-of-week="1"
                      range
                      no-title
                      scrollable
                    >
                    </v-date-picker>
                  </v-menu>
                  <div class="flex">
                    <v-menu
                      ref="menu"
                      :close-on-content-click="false"
                      :nudge-right="40"
                      transition="scale-transition"
                      offset-y
                      max-width="290px"
                      min-width="290px"
                    >
                      <template v-slot:activator="{ on, attrs }">
                        <v-text-field
                          v-model="event.timeStart"
                          label="Time event start"
                          prepend-icon="mdi-clock-time-four-outline"
                          readonly
                          v-bind="attrs"
                          v-on="on"
                        ></v-text-field>
                      </template>
                      <v-time-picker
                        v-model="event.timeStart"
                        full-width
                        format="24hr"
                        @click:minute="$refs.menu.save(event.timeStart)"
                      ></v-time-picker>
                    </v-menu>
                    <div class="spacer"></div>
                    <v-menu
                      ref="menu"
                      :close-on-content-click="false"
                      :nudge-right="40"
                      transition="scale-transition"
                      offset-y
                      max-width="290px"
                      min-width="290px"
                    >
                      <template v-slot:activator="{ on, attrs }">
                        <v-text-field
                          v-model="event.timeEnd"
                          label="Time event end"
                          prepend-icon="mdi-clock-time-four-outline"
                          readonly
                          v-bind="attrs"
                          v-on="on"
                        ></v-text-field>
                      </template>
                      <v-time-picker
                        v-model="event.timeEnd"
                        full-width
                        format="24hr"
                        @click:minute="$refs.menu.save(event.timeEnd)"
                      ></v-time-picker>
                    </v-menu>
                  </div>
                </v-card-text>

                <v-card-actions>
                  <v-spacer></v-spacer>

                  <v-btn
                    text
                    color="primary"
                    @click="
                      () => {
                        openAddNewEventModal();
                        addEvent();
                      }
                    "
                  >
                    submit
                  </v-btn>
                </v-card-actions>
              </v-card>
            </v-dialog>
            <v-menu bottom right>
              <template v-slot:activator="{ on, attrs }">
                <v-btn outlined color="grey darken-2" v-bind="attrs" v-on="on">
                  <span>{{ data.typeToLabel[data.type] }}</span>
                  <v-icon right> mdi-menu-down </v-icon>
                </v-btn>
              </template>
              <v-list>
                <v-list-item @click="data.type = 'day'">
                  <v-list-item-title>Day</v-list-item-title>
                </v-list-item>
                <v-list-item @click="data.type = 'week'">
                  <v-list-item-title>Week</v-list-item-title>
                </v-list-item>
                <v-list-item @click="data.type = 'month'">
                  <v-list-item-title>Month</v-list-item-title>
                </v-list-item>
                <v-list-item @click="data.type = '4day'">
                  <v-list-item-title>4 days</v-list-item-title>
                </v-list-item>
              </v-list>
            </v-menu>
          </v-toolbar>
        </v-sheet>
        <v-sheet height="600">
          <v-calendar
            ref="calendar"
            v-model="data.focus"
            color="primary"
            :weekdays="data.weekday"
            :events="$store.state.dashboard.calendarEvents"
            :event-color="getEventColor"
            :type="data.type"
            @click:event="showEvent"
            @click:more="viewDay"
            @click:date="viewDay"
          ></v-calendar>
          <v-menu
            v-model="data.selectedOpen"
            :close-on-content-click="false"
            :activator="data.selectedElement"
            offset-x
            max-width="350"
          >
            <v-card color="grey lighten-4" min-width="350px" flat>
              <v-toolbar :color="data.selectedEvent.color" dark>
                <v-toolbar-title>{{ data.selectedEvent.name }}</v-toolbar-title>
                <v-spacer></v-spacer>
                <v-btn icon>
                  <v-icon>mdi-pencil</v-icon>
                </v-btn>
                <v-btn icon @click="deleteEvent">
                  <v-icon>mdi-trash-can</v-icon>
                </v-btn>
              </v-toolbar>
              <v-card-text>
                <span class="custom-details-text-color">{{ data.selectedEvent.details }}</span>
              </v-card-text>
              <v-card-actions>
                <v-btn text color="secondary" @click="data.selectedOpen = !data.selectedOpen">
                  Cancel
                </v-btn>
              </v-card-actions>
            </v-card>
          </v-menu>
        </v-sheet>
      </v-col>
    </v-row>
  </v-app>
</template>

<script lang="ts" src="./index.ts" />
<style lang="scss" src="./index.scss" scoped />
