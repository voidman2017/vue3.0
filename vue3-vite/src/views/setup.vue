<template>
  <h1>{{state.count}} * 2={{double}}</h1>
  <button @click="add">累加</button>
  <HelloWorld />
</template>
<script>
import HelloWorld from "../components/HelloWorld.vue";
import { reactive, computed } from "vue";

export default {
  components: {
    HelloWorld,
  },
  props: {
    name: {
      type: String,
      default: 'App'
    },
  },
  setup(props) {
    console.log(props.name)
    const state = reactive({
      count: 1,
    });
    function add() {
      state.count++;
    }
    const double = computed(() => state.count * 2);
    return { state, add, double };
  },
};
</script>