<template>
  <DashboardBar></DashboardBar>
  <router-view />
</template>

<style>
h2 {
  width: 100%;
  max-width: 330px;
  padding: 15px;
  margin: auto;
  text-align: center;
}
</style>

<script>
import DashboardBar from "@/components/DashboardBar.vue";
export default {
  components: {
    DashboardBar,
  },
};
</script>
