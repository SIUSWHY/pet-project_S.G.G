import { Component, Prop, Vue } from 'vue-property-decorator';
import cryptPassword from '../../../server/helpers/hashPassword';
@Component({
  components: {},
})
export default class Dashboard extends Vue {
  @Prop({ type: Boolean, default: true }) private isDisable?: boolean | undefined;
  @Prop({ type: Boolean, default: false }) private isDialogOpen?: boolean;
  @Prop({ type: Boolean, default: true }) private isHide?: boolean;
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

  private async postUser() {
    const password: string = await cryptPassword(this.user.password);
    const response = {
      username: this.user.username,
      name: this.user.name,
      email: this.user.email,
      password: password,
      avatar: this.user.avatar,
      role: this.user.role,
    };
    console.log(response);
  }
}
