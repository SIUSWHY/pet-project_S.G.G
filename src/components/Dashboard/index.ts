import { Component, Vue } from 'vue-property-decorator';
@Component({
  components: {

  },
})
export default class Dashboard extends Vue {
  data() {
    return {
      items: [
        { title: 'Dashboard', icon: 'mdi-view-dashboard', link: '/dashboard/dashboard' },
        { title: 'My Account', icon: 'mdi-account', link: '/dashboard/all' },
        { title: 'About', icon: 'mdi-help-box' },
        { title: 'Users', icon: 'mdi-account-group-outline', link: '/dashboard/users' },
      ],
    }
  }
}
