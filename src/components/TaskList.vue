<script lang="ts">

import { defineComponent, PropType } from 'vue'
import Task from '../interfaces/Task'
export default defineComponent({
  name: 'TaskList',  
  props: {
    task : {
      type: Object as PropType<Task>,
      required: true
    },
    number : {
      type: Number,
      required: true
    }
  },
  computed: {
    formatedSecond () {
      return new Date(this.task.seconds * 1000).toISOString().substr(11,8);
    }
  }
});

</script>

<template>
  <div class="card m-5">
    <div class="card-header">
      #{{number}}: {{task.description}}
    </div>
    <div class="card-body">      
      <p class="card-text">Time: {{formatedSecond}}</p>
      
    </div>
  </div>
</template>

<style scoped>

</style>
