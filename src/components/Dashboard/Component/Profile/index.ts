import { decodeToken } from '@/helpers/decodeToken';
import { Component, Prop, Vue, Watch } from 'vue-property-decorator';
import { namespace } from 'vuex-class';
import { UserType } from '../Users/store/types';
const profiledata = namespace('profiledata');

@Component({
  components: {},
})
export default class Profile extends Vue {
  private user: UserType = decodeToken();
  async created() {
    console.log(this.user);
    await this.$store.dispatch('profiledata/loadLogs');
  }
  private headers: Array<Object> = [
    {
      text: 'Admins',
      align: 'start',
      value: 'name',
    },
    { text: 'Action', value: 'message' },
    // { text: 'Result', value: 'result' },
    { text: 'Date', value: 'date' },
  ];
}
