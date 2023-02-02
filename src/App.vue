<template>
  <div class="d-flex">  
    <div>
      <Menu />
    </div>
    <div class="w-100">
      <CreateTask @stopedCron="addTaskOnThelist" />
      <div v-if="showList">
        <TaskList v-for="(task,index) in taskList" :key="index" :task="task" :number="index+1"/>
      </div>
      <div class="alert alert-warning m-2" v-else role="alert">
        You need to be more efficient!
      </div>

    </div>
  </div>
</template>

<style scoped>
</style>

<script lang="ts">

import Menu from './components/Menu.vue'
import CreateTask from './components/CreateTask.vue'
import TaskList from './components/TaskList.vue'
import Task from './interfaces/Task'
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'App',
  data() {
    return {
      showList : false,
      taskList: [] as Task[],      
    }
  },
  components: {
    Menu,
    CreateTask,
    TaskList
  },
  methods: {
    addTaskOnThelist(task : Task) {
      this.taskList.push(task);
      this.showList = true;
    }
  }
});

</script>

