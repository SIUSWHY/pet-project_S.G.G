import { Component, Vue } from 'vue-property-decorator';
import loginUser from '@/API/loginUser';
import Cookies from 'js-cookie';
import router from '@/router';
@Component({
  components: {},
})
export default class Login extends Vue {
  private user = {
    email: 'Admin@gmail.com',
    password: 'password',
  };
  private isHide = true;

  private async loginUser() {
    try {
      const {
        data: { token },
      } = await loginUser(this.user);

      Cookies.set('Token', token);
      router.push({ path: '/dashboard/users' });
    } catch {
      alert('Incorrect data');
    }
  }
}
