import { Component, Vue } from 'vue-property-decorator';
import MainPage from '/src/components/Home/MainPage/index.vue'; // @ is an alias to /src
import MainPageMobile from '/src/components/Home/MainPageMobile/index.vue';

@Component({
  components: {
    MainPage,
    MainPageMobile,
  },
})
export default class Home extends Vue {
  get getTypePC(): boolean {
    if (
      /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)
    ) {
      return true;
    } else {
      return false;
    }
  }
}
