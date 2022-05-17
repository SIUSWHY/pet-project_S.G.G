import { Component, Vue } from 'vue-property-decorator';
import Links from './Links/index.vue';
import Content from './Links/Content/index.vue';
import { VueEditor } from 'vue2-editor';

@Component({
  components: {
    Links,
    Content,
    VueEditor,
  },
})
export default class HadesContent extends Vue {}
