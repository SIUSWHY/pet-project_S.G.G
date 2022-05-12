import { Component, Vue } from 'vue-property-decorator';
import Links from './Links/index.vue'
import Content from './Links/Content/index.vue';
@Component({
  components: {
    Links,
    Content,
  },
})
export default class HadesContent extends Vue {
}