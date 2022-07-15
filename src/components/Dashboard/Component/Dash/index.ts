import { Component, Vue } from 'vue-property-decorator';
import Calendar from './Calendar/index.vue';
import { namespace } from 'vuex-class';
const usersList = namespace('usersList');

@Component({
  components: {
    Calendar,
  },
})
export default class Dashboard extends Vue {
  @usersList.State private users!: any;
  @usersList.Action private loadData!: () => Promise<void>;

  private sparklineData = {
    width: 1,
    radius: 10,
    padding: 8,
    lineCap: 'round',
    labels: ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '11', '13', '14'],
    gradientDirection: 'top',
    gradient: ['red', 'orange', 'yellow'],
    fill: false,
    type: 'trend',
    autoLineWidth: false,
  };
  private items = [
    {
      color: 'red lighten-2',
      icon: 'mdi-trash-can',
      massege: 'deleted user',
      name: 'Anna',
    },
    {
      color: 'purple darken-1',
      icon: 'mdi-pencil',
      massege: 'eddit user',
      name: 'Eva',
    },
    {
      color: 'green darken-1',
      icon: 'mdi-plus',
      massege: 'created user',
      name: 'Eva',
    },
  ];
  private count: Array<number> = [];
  private isLoading = false;
  private exhale = (ms: number | undefined) => new Promise(resolve => setTimeout(resolve, ms));
  // private lables = this.state.users[1].date;

  mounted() {
    // console.log(this.lables);
  }

  private countData() {
    return Math.ceil(Math.random() * (120 - 80) + 80);
  }
  private async setData() {
    this.isLoading = true;
    await this.exhale(1500);
    this.count = Array.from({ length: 14 }, this.countData);
    this.isLoading = false;
  }

  async created() {
    this.setData();
    await this.$store.dispatch('usersList/loadData');
  }
}
