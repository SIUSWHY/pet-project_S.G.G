import store from '@/store';
import { Component, Prop, Vue, Watch } from 'vue-property-decorator';
import { namespace } from 'vuex-class';
const users = namespace('users');
@Component({
  components: {},
})
export default class Users extends Vue {
  @Prop({ type: Number, default: 48 }) private Size!: number;

  @users.Action private loadData!: () => Promise<void>;
  data() {
    return {
      selected: [],
      headers: [
        { text: '', value: 'avatar', sortable: false, width: '1px', height: '60px' },
        {
          text: 'Username',
          align: 'start',
          value: 'username',
        },
        { text: 'Name', value: 'name' },
        { text: 'Email', value: 'email' },
        { text: 'Role', value: 'role' },
      ],
    };
  }

  private resize() {
    return;
  }

  async created() {
    await this.$store.dispatch('usersList/loadData');
  }

  @Watch('selected')
  private onSelectedChange(selected: any) {
    // store.commit('addSelected', selected);
    // store.state.selected.commit('addSelected', selected);
  }
}
