import sendUser from '@/API/sendUser';
import deleteUserById from '@/API/deleteUsers';
import { Component, Prop, Vue, Watch } from 'vue-property-decorator';
import { namespace } from 'vuex-class';
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
    { title: 'My Account', icon: 'mdi-account', link: '/dashboard/all' },
    { title: 'Users', icon: 'mdi-account-group-outline', link: '/dashboard/users' },
  ];
}
