import { Component, Vue } from 'vue-property-decorator';
import Menu from '../../../components/Menu/index.vue';
import HadesContent from './component/index.vue';
@Component({
  components: {
    Menu,
    HadesContent
  }
})
export default class Hades extends Vue {}
