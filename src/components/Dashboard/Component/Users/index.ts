import { Component, Vue } from 'vue-property-decorator';
@Component({
  components: {
  },
})
export default class Users extends Vue {
  data() {
    return {
      singleSelect: false,
      selected: [],
      headers: [
        { text: '', value: 'avatar', sortable: false },
        {
          text: 'User',
          align: 'start',
          value: 'name',
        },
        { text: 'Role', value: 'role' },
        { text: 'Actions', value: 'actions' },
      ],
      desserts: [
        {
          name: 'Frozen Yogurt',
          role: 'admin',
          avatar: 6.0,
          carbs: 24,
          protein: 4.0,
          iron: '1%',
        },
        {
          name: 'Ice cream sandwich',
          role: 'moderator',
          avatar: 9.0,
          carbs: 37,
          protein: 4.3,
          iron: '1%',
        },
        {
          name: 'Eclair',
          role: 'user',
          avatar: 16.0,
          carbs: 23,
          protein: 6.0,
          iron: '7%',
        },
        {
          name: 'Cupcake',
          role: 'user',
          avatar: 3.7,
          carbs: 67,
          protein: 4.3,
          iron: '8%',
        },
        {
          name: 'Gingerbread',
          role: 'user',
          avatar: 16.0,
          carbs: 49,
          protein: 3.9,
          iron: '16%',
        },
        {
          name: 'Jelly bean',
          role: 'user',
          avatar: 0.0,
          carbs: 94,
          protein: 0.0,
          iron: '0%',
        },
        {
          name: 'Lollipop',
          role: 'user',
          avatar: 0.2,
          carbs: 98,
          protein: 0,
          iron: '2%',
        },
        {
          name: 'Honeycomb',
          role: 'user',
          avatar: 3.2,
          carbs: 87,
          protein: 6.5,
          iron: '45%',
        },
        {
          name: 'Donut',
          role: 'user',
          avatar: 25.0,
          carbs: 51,
          protein: 4.9,
          iron: '22%',
        },
        {
          name: 'KitKat',
          role: 'user',
          avatar: 26.0,
          carbs: 65,
          protein: 7,
          iron: '6%',
        },
      ],
    }
  }
}
