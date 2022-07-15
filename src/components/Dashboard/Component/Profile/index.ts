import { decodeToken } from '@/helpers/decodeToken';
import { Component, Prop, Vue, Watch } from 'vue-property-decorator';
import { namespace } from 'vuex-class';
import { UserType } from '../Users/store/types';
const usersList = namespace('usersList');

@Component({
  components: {},
})
export default class Profile extends Vue {
  private user: UserType = decodeToken();
  async created() {
    console.log(this.user);
  }
}
