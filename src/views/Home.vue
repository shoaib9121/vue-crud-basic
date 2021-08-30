<template>
  <Employees />
</template>

<script>
// @ is an alias to /src
import Employees from "@/components/Employees.vue";

export default {
  name: "Home",
  components: {
    Employees,
  },
};
</script>
