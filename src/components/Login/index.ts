import { Component, Vue } from 'vue-property-decorator';
@Component({
  components: {},
})
export default class Login extends Vue {
  private user = {
    email: 'john.doue@gmail.com',
    password: 'password',
  };
}
