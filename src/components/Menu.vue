<script setup lang="ts">
import { BIconHouse } from 'bootstrap-icons-vue';


</script>

<template>
  <div class="d-flex flex-column flex-shrink-0 p-3 text-white bg-dark vh-100" style="width: 180px;">
    <a href="/" class="align-items-center mb-3 mb-md-0 me-md-auto text-white text-decoration-none">
      <svg class="bi me-2" width="40" height="32">
        <use xlink:href="#bootstrap"></use>
      </svg>
      <span class="fs-4">
        <img alt="Minha logo" class="logo" src="@/assets/logo.png" width="70" height="70" />
      </span>
     
    </a>
    <hr>
    <ul class="nav nav-pills flex-column mb-auto">
      <li class="nav-item">
        <a href="#" class="nav-link active">
          <BIconHouse class="m-2" />
          My tasks
        </a>
      </li>
     
    </ul>
    <hr>
  </div>
</template>

<style scoped>

</style>
