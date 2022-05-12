import { MenuItemType } from '@/types/Menu';
import { Component, Vue } from 'vue-property-decorator';
import ItemsData from './items'
import CharactersList from './characters';

@Component({
  components: {
  },
})
export default class Links extends Vue {
  private menuList: Array<MenuItemType> = ItemsData;
  private characterList: Array<MenuItemType> = CharactersList;
}