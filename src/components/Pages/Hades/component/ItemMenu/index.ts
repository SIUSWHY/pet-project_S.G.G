import store from '@/store';
import { Component, Vue } from 'vue-property-decorator';
@Component({
  components: {
  },
})
export default class MenuItem extends Vue {

  private item(): object {
    return store.state.Items;
  }
}