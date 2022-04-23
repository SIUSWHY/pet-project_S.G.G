import { MenuItemType } from '@/types/Menu';
import { Component, Prop, Vue } from 'vue-property-decorator';
import ItemsData from './data'

@Component({
  components: {
  },
})
export default class HadesContent extends Vue {
  @Prop({ type: Boolean, default: false }) private isActive?: boolean;

  private menuList: MenuItemType = ItemsData;
  private toggleClass(e: Event) {
    this.isActive = !this.isActive;
  }
}