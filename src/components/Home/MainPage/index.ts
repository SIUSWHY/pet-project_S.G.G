import { Component, Vue } from 'vue-property-decorator';
import GameCollection from './GameCollection/index.vue';

@Component({
  components: {
    GameCollection,
  },
})
export default class MainPage extends Vue {}
