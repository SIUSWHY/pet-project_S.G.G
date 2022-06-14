import deleteEvent from '@/API/deleteEvent';
import sendEvent from '@/API/sendEvent';
import { Component, Vue } from 'vue-property-decorator';
import { namespace } from 'vuex-class';
const dashboard = namespace('dashboard');
@Component({
  components: {},
})
export default class Calendar extends Vue {
  @dashboard.State private calendarEvents!: any;
  @dashboard.Action private pushNewEvent!: (eventData: any) => Promise<void>;
  @dashboard.Action private pushEventsWithoutDeleted!: (id: number) => Promise<void>;
  @dashboard.Action private loadEvents!: () => Promise<void>;

  private data = {
    focus: '',
    type: 'month',
    typeToLabel: {
      month: 'Month',
      week: 'Week',
      day: 'Day',
      '4day': '4 Days',
    },
    dates: '',
    selectedEvent: {},
    weekday: [1, 2, 3, 4, 5, 6, 0],
    selectedElement: null,
    selectedOpen: false,
    events: [],
    colors: ['blue', 'indigo', 'deep-purple', 'cyan', 'green', 'orange', 'grey darken-1'],
    names: ['Meeting', 'Holiday', 'PTO', 'Travel', 'Event', 'Birthday', 'Conference', 'Party'],
  };
  private event = {
    color: '',
    dates: [],
    timeStart: '',
    timeEnd: '',
    end: '',
    start: '',
    details: '',
    name: '',
    timed: 'true',
  };
  private async addEvent() {
    this.setDate();
    const eventData = {
      color: this.event.color,
      name: this.event.name,
      timed: this.event.timed,
      start: this.event.start,
      end: this.event.end,
      details: this.event.details,
    };
    try {
      const { data: event } = await sendEvent(eventData);
      this.pushNewEvent(event);
    } catch (error) {
      console.error(error);
    }
  }
  private setDate() {
    const { dates } = this.event;
    if (dates[0] > dates[1]) {
      this.event.start = dates[1];
      this.event.end = dates[0];
    }
    if (dates.length === 1) {
      this.event.start = dates[0];
      this.event.end = dates[0];
    } else {
      this.event.start = dates[0];
      this.event.end = dates[1];
    }
    if (this.event.timeStart && this.event.timeEnd !== '') {
      this.event.start = this.event.start + ' ' + this.event.timeStart;
      this.event.end = this.event.end + ' ' + this.event.timeEnd;
    }
  }
  private isAddNewEventModalOpen: boolean = false;
  private openAddNewEventModal() {
    this.isAddNewEventModalOpen = !this.isAddNewEventModalOpen;
  }

  async created() {
    await this.$store.dispatch('dashboard/loadEvents');
  }
  private viewDay({ date }: any) {
    this.data.focus = date;
    this.data.type = 'day';
  }
  private getEventColor(event: { color: any }) {
    return event.color;
  }
  private setToday() {
    this.data.focus = '';
  }
  private prev() {
    (this.$refs.calendar as any)?.prev();
  }
  private next() {
    (this.$refs.calendar as any)?.next();
  }
  private async deleteEvent() {
    const id = this.data.selectedEvent!._id;
    await deleteEvent(id);
    this.pushEventsWithoutDeleted(id);
    console.log(id);
  }
  private showEvent({ nativeEvent, event }: any) {
    const open = () => {
      this.data.selectedEvent = event;
      this.data.selectedElement = nativeEvent.target;
      requestAnimationFrame(() => requestAnimationFrame(() => (this.data.selectedOpen = true)));
    };

    if (this.data.selectedOpen) {
      this.data.selectedOpen = false;
      requestAnimationFrame(() => requestAnimationFrame(() => open()));
    } else {
      open();
    }

    nativeEvent.stopPropagation();
  }
}
