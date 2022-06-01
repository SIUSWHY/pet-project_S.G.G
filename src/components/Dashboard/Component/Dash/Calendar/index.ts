import { Component, Vue } from 'vue-property-decorator';
import { namespace } from 'vuex-class';
const dashboard = namespace('dashboard');
@Component({
  components: {},
})
export default class Calendar extends Vue {
  @dashboard.State private calendarEvents!: any;
  private data = {
    focus: '',
    type: 'month',
    typeToLabel: {
      month: 'Month',
      week: 'Week',
      day: 'Day',
      '4day': '4 Days',
    },
    dates: [],
    selectedEvent: {},
    selectedElement: null,
    selectedOpen: false,
    events: [],
    colors: ['blue', 'indigo', 'deep-purple', 'cyan', 'green', 'orange', 'grey darken-1'],
    names: ['Meeting', 'Holiday', 'PTO', 'Travel', 'Event', 'Birthday', 'Conference', 'Party'],
  };
  private event = {
    color: '',
    dates: [],
    end: '',
    start: '',
    name: '',
    timed: 'true',
  };
  private addEvent() {
    this.setDate();
  }
  private setDate() {
    const { dates } = this.event;
    if (dates[0] > dates[1]) {
      this.event.start = dates[1];
      this.event.end = dates[0];
    } else {
      this.event.start = dates[0];
      this.event.end = dates[1];
    }
  }
  private isAddNewEventModalOpen: boolean = false;
  private openAddNewEventModal() {
    this.isAddNewEventModalOpen = !this.isAddNewEventModalOpen;
  }

  mounted() {
    this.$refs.calendar!.checkChange();
  }

  created() {
    this.data.events = this.calendarEvents;
  }
  private viewDay({ date }: any) {
    this.data.focus = date;
    this.data.type = 'day';
  }
  private dateRangeText() {
    return this.data.dates.join(' ~ ');
  }
  private getEventColor(event: { color: any }) {
    return event.color;
  }
  private setToday() {
    this.data.focus = '';
  }
  private prev() {
    this.$refs.calendar?.prev();
  }
  private next() {
    this.$refs.calendar?.next();
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
