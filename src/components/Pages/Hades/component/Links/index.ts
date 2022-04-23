import { MenuItemType } from '@/types/Menu';
import { Component, Prop, Vue } from 'vue-property-decorator';
import ItemsData from './items'
import CharactersList from './characters';

@Component({
  components: {
  },
})
export default class Links extends Vue {
  @Prop({ type: Boolean, default: false }) private isActive?: boolean;

  private menuList: MenuItemType = ItemsData;
  private characterList: MenuItemType = CharactersList;
}