import store from '@/store';
import { Component, Prop, Vue, Watch } from 'vue-property-decorator';
import { namespace } from 'vuex-class';
const usersList = namespace('usersList');
@Component({
  components: {},
})
export default class Users extends Vue {
  @Prop({ type: Number, default: 48 }) private Size!: number;
  @usersList.Action private loadData!: () => Promise<void>;
  @usersList.Action private pushSelected!: (selected: any) => void;

  private selected: Array<any> = [];
  private headers: Array<Object> = [
    { text: '', value: 'avatar', sortable: false, width: '1px', height: '60px' },
    {
      text: 'Username',
      align: 'start',
      value: 'username',
    },
    { text: 'Name', value: 'name' },
    { text: 'Email', value: 'email' },
    { text: 'Role', value: 'role' },
  ];

  private resize() {
    return;
  }

  async created() {
    await this.$store.dispatch('usersList/loadData');
  }

  @Watch('selected')
  private onSelectedChange() {
    this.pushSelected(this.selected);
    if (this.selected !== []) {
      return;
    }
  }
}
