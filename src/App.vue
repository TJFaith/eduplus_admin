<template>
  <div>
    <div class="container-fluid p-0">
    <div class="row">
      <div class="col-3">
        <app-sidebar></app-sidebar>
        <app-header></app-header>
      </div>
      <div class="col-8 pageLayout">
        <router-view></router-view>
      </div>
    </div>
</div>
  </div>
</template>

<style>

</style>
