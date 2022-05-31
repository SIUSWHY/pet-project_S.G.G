import { Component, Vue } from 'vue-property-decorator';
@Component({
  components: {},
})
export default class Calendar extends Vue {
  private data = {
    focus: '',
    type: 'month',
    typeToLabel: {
      month: 'Month',
      week: 'Week',
      day: 'Day',
      '4day': '4 Days',
    },
    selectedEvent: {},
    selectedElement: null,
    selectedOpen: false,
    events: [],
    colors: ['blue', 'indigo', 'deep-purple', 'cyan', 'green', 'orange', 'grey darken-1'],
    names: ['Meeting', 'Holiday', 'PTO', 'Travel', 'Event', 'Birthday', 'Conference', 'Party'],
  };
  mounted() {
    this.$refs.calendar!.checkChange();
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
  private updateRange({ start, end }: any) {
    const events = [];

    const min = new Date(`${start.date}T00:00:00`);
    const max = new Date(`${end.date}T23:59:59`);
    const days = (max.getTime() - min.getTime()) / 86400000;
    const eventCount = this.rnd(days, days + 20);

    for (let i = 0; i < eventCount; i++) {
      const allDay = this.rnd(0, 3) === 0;
      const firstTimestamp = this.rnd(min.getTime(), max.getTime());
      const first = new Date(firstTimestamp - (firstTimestamp % 900000));
      const secondTimestamp = this.rnd(2, allDay ? 288 : 8) * 900000;
      const second = new Date(first.getTime() + secondTimestamp);

      events.push({
        name: this.data.names[this.rnd(0, this.data.names.length - 1)],
        start: first,
        end: second,
        color: this.data.colors[this.rnd(0, this.data.colors.length - 1)],
        timed: !allDay,
      });
    }

    this.data.events = events;
  }
  private rnd(a: number, b: number) {
    return Math.floor((b - a + 1) * Math.random()) + a;
  }
}
