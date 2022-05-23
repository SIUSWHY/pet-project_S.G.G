import { Component, Vue } from 'vue-property-decorator';
@Component({
  components: {},
})
export default class Users extends Vue {
  data() {
    return {
      singleSelect: false,
      selected: [],
      headers: [
        { text: '', value: 'avatar', sortable: false, width: '1px' },
        {
          text: 'User',
          align: 'start',
          value: 'name',
        },
        { text: 'Role', value: 'role' },
      ],
    };
  }

  created() {
    this.$store.dispatch('users/loadData');
  }
}
