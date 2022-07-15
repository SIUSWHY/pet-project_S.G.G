import { Component, Prop, Vue, Watch } from 'vue-property-decorator';
import Cookies from 'js-cookie';
import { namespace } from 'vuex-class';
import router from '@/router';
const usersList = namespace('usersList');
@Component({
  components: {},
})
export default class Dashboard extends Vue {
  @Prop({ type: Boolean, default: false }) private isLoading?: boolean;
  @Prop({ type: Boolean, default: true }) private isHide?: boolean;
  @usersList.Action private loadData!: () => Promise<void>;
  @usersList.Action private pushUsersWithoutDeleted!: (usersId: any) => Promise<void>;
  @usersList.Action private pushNewUser!: (user: any) => Promise<void>;
  @usersList.Getter private isDisableTools!: object;
  @usersList.Getter private selectedUsersById!: any;
  @usersList.State private selected!: any;

  private items = [
    { title: 'Dashboard', icon: 'mdi-view-dashboard', link: '/dashboard/dashboard' },
    { title: 'Users', icon: 'mdi-account-group-outline', link: '/dashboard/users' },
    { title: 'My Account', icon: 'mdi-account', link: '/dashboard/all' },
  ];

  private logoutUser() {
    Cookies.remove('Token');
    router.push({ path: '/login' });
  }
}
