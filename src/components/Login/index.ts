import { Component, Vue } from 'vue-property-decorator';
import loginUser from '@/API/loginUser';
import Cookies from 'js-cookie';
@Component({
  components: {},
})
export default class Login extends Vue {
  private user = {
    email: 'admin@gmail.com',
    password: 'admin',
  };
  private isHide = false;

  private async loginUser() {
    const {
      data: { token },
    } = await loginUser(this.user);

    Cookies.set('Token', token);
  }
}
