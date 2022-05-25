import sendUser from '@/API/sendUser';
import { Component, Prop, Vue } from 'vue-property-decorator';
import { namespace } from 'vuex-class';
const users = namespace('users');
@Component({
  components: {},
})
export default class Dashboard extends Vue {
  @Prop({ type: Boolean, default: true }) private isDisable?: boolean | undefined;
  @Prop({ type: Boolean, default: false }) private isDialogOpen?: boolean;
  @Prop({ type: Boolean, default: false }) private isLoading?: boolean;
  @Prop({ type: Boolean, default: true }) private isHide?: boolean;
  @users.Action private loadData!: () => Promise<void>;

  isOpen: boolean | undefined;
  user: any;

  data() {
    return {
      isOpen: this.isDialogOpen,
      items: [
        { title: 'Dashboard', icon: 'mdi-view-dashboard', link: '/dashboard/dashboard' },
        { title: 'My Account', icon: 'mdi-account', link: '/dashboard/all' },
        { title: 'About', icon: 'mdi-help-box' },
        { title: 'Users', icon: 'mdi-account-group-outline', link: '/dashboard/users' },
      ],
      roles: ['User', 'Moderator', 'Admin'],
      user: {
        username: 'John',
        name: 'Doue',
        email: 'john.doue@gmail.com',
        password: 'password',
        role: 'User',
        avatar: '',
      },
    };
  }

  private openModal() {
    return (this.isOpen = !this.isOpen);
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
