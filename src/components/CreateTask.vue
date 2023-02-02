<script lang="ts">
import { defineComponent } from 'vue'
export default defineComponent({
  name: 'Cronometro',
  emits: ['stopedCron'],
  data() {
    return {
      seconds : 0,
      cronId : 0,
      descriptionTask : "",
      buttonControl : false
    }
  },
  methods: {
    startCron (){
      this.cronId = window.setInterval(()=> {
      this.seconds++                
      },1000)
      this.buttonControl = !this.buttonControl;
    },

    stopCron (){

      this.$emit('stopedCron',{seconds : this.seconds, description : this.descriptionTask})
      window.clearInterval(this.cronId);
      this.seconds = 0;
      this.descriptionTask = '';
      this.buttonControl = !this.buttonControl;

    }
  },
  computed: {
    currentTaskTime() : string {
      return new Date(this.seconds * 1000).toISOString().substr(11,8);
    },
    buttonControl() : boolean {
      return this.buttonControl;
    } 
  }
})
</script>

<template>
  <div class="input-group p-3 w-fluid bg-secondary">
    <input type="text" class="form-control" placeholder="Create your task" aria-label="Create your task"
      aria-describedby="basic-addon2" v-model="descriptionTask" >
    <span class="input-group-text" id="basic-addon2">{{ currentTaskTime }}</span>
    <div>
      <button type="button" class="btn btn-primary mx-2" :disabled="buttonControl" @click="startCron">Start</button>
      <button type="button" class="btn btn-danger" :disabled="!buttonControl" @click="stopCron">Stop</button>
    </div>
  </div>  
</template>

<style scoped>

</style>

