import deleteUserById from '@/API/deleteUsers';
import sendUser from '@/API/sendUser';
import store from '@/store';
import { Component, Prop, Vue, Watch } from 'vue-property-decorator';
import { namespace } from 'vuex-class';
import { UserType } from './store/types';
const usersList = namespace('usersList');
@Component({
  components: {},
})
export default class Users extends Vue {
  @usersList.Action private loadData!: () => Promise<void>;
  @usersList.Action private pushSelected!: (selected: any) => void;
  @usersList.Action private pushUsersWithoutDeleted!: (usersId: any) => Promise<void>;
  @usersList.Action private pushNewUser!: (user: any) => Promise<void>;
  @usersList.Getter private isDisableTools!: object;
  @usersList.Getter private selectedUsersById!: any;
  @usersList.State private selected!: any;

  private selected: any = [];
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
  private isLoading = false;
  private isHide = true;
  private Size = 48;
  private countItemsOnPage = 13;

  private resize() {
    // if (this.Size === 48) {
    //   return (this.Size = 100);
    // }
    // return (this.Size = 48);
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
  private user = {
    username: 'John',
    name: 'Doue',
    email: 'john.doue@gmail.com',
    password: 'password',
    role: 'User',
    avatar: '',
  };
  private roles = ['User', 'Moderator', 'Admin'];
  private isCreateNewUserDialogOpen: boolean = false;
  private isDisable = true;

  @Watch('selected')
  private toggleDisableTools() {
    this.isDisableTools;
  }

  private openModal() {
    this.isCreateNewUserDialogOpen = !this.isCreateNewUserDialogOpen;
  }

  private async refreshData() {
    this.isLoading = true;
    await this.$store.dispatch('usersList/loadData');
    this.isLoading = false;
  }
  private async deleteUsers() {
    try {
      const usersId: string[] = this.selectedUsersById;
      await deleteUserById(usersId);
      this.pushUsersWithoutDeleted(usersId);
    } catch (error) {
      console.error(error);
    }
  }

  private async postUser() {
    const response = new FormData();
    response.append('username', this.user.username);
    response.append('name', this.user.name);
    response.append('email', this.user.email);
    response.append('password', this.user.password);
    response.append('avatar', this.user.avatar);
    response.append('role', this.user.role);
    try {
      const user = await sendUser(response);
      this.pushNewUser(user);
    } catch (error) {
      console.error(error);
    }
  }
}
