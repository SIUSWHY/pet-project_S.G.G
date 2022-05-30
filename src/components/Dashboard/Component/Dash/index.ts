import { Component, Vue } from 'vue-property-decorator';
@Component({
  components: {},
})
export default class Dashboard extends Vue {
  private sparklineData = {
    width: 1,
    radius: 10,
    padding: 8,
    lineCap: 'round',
    labels: ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12', '13', '14'],
    gradientDirection: 'top',
    gradient: ['red', 'orange', 'yellow'],
    fill: false,
    type: 'trend',
    autoLineWidth: false,
  };
  private count: Array<number> = [];
  private isLoading = false;
  private exhale = (ms: number | undefined) => new Promise(resolve => setTimeout(resolve, ms));

  private countData() {
    return Math.ceil(Math.random() * (120 - 80) + 80);
  }
  private async setData() {
    this.isLoading = true;
    await this.exhale(1500);
    this.count = Array.from({ length: 20 }, this.countData);
    this.isLoading = false;
  }

  created() {
    this.setData();
  }
}
