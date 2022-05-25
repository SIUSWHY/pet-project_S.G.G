import sendUser from '@/API/sendUser';
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
  @usersList.Getter private isDisableTools!: boolean;
  @usersList.State private selected!: any;

  private items = [
    { title: 'Dashboard', icon: 'mdi-view-dashboard', link: '/dashboard/dashboard' },
    { title: 'My Account', icon: 'mdi-account', link: '/dashboard/all' },
    { title: 'About', icon: 'mdi-help-box' },
    { title: 'Users', icon: 'mdi-account-group-outline', link: '/dashboard/users' },
  ];
  private user = {
    username: 'John',
    name: 'Doue',
    email: 'john.doue@gmail.com',
    password: 'password',
    role: 'User',
    avatar: '',
  };
  private roles = ['User', 'Moderator', 'Admin'];
  private isDialogOpen = false;
  private isDisable = true;

  @Watch('selected')
  private toggleDisableTools() {
    this.isDisableTools;
  }

  private openModal() {
    return (this.isDialogOpen = !this.isDialogOpen);
  }

  private async refreshData() {
    this.isLoading = true;
    await this.$store.dispatch('usersList/loadData');
    this.isLoading = false;
  }

  private async postUser() {
    const response = new FormData();
    response.append('username', this.user.username);
    response.append('name', this.user.name);
    response.append('email', this.user.email);
    response.append('password', this.user.password);
    response.append('avatar', this.user.avatar);
    response.append('role', this.user.role);
    const data = await sendUser(response);
  }
}
