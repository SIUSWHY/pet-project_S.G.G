import { Component, Prop, Vue } from 'vue-property-decorator';
import { namespace } from 'vuex-class';
const users = namespace('users');
@Component({
  components: {},
})
export default class Users extends Vue {
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

  private name() {
    const selecte = this.data.selected;
    this.$emit('check', selecte);
  }

  async created() {
    await this.$store.dispatch('usersList/loadData');
  }
}
