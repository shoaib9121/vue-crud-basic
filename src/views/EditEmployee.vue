<template>
  <h2 class="mb-4">Edit Employee</h2>
  <div v-if="!submitted">
    <form @submit.prevent="submitEmployee">
      <div class="form-group">
        <label for="name">Name</label>
        <input
          v-model="employee.name"
          type="text"
          class="form-control"
          id="name"
          placeholder="Enter Full name"
        />
      </div>
      <div class="form-group">
        <label for="phone">Phone</label>
        <input
          v-model="employee.phone"
          type="text"
          class="form-control"
          id="phone"
          placeholder="Enter phone"
        />
      </div>
      <div class="form-group">
        <label for="exampleInputEmail1">Email address</label>
        <input
          v-model="employee.email"
          type="email"
          class="form-control"
          id="exampleInputEmail1"
          aria-describedby="emailHelp"
          placeholder="Enter email"
        />
      </div>
      <button type="submit" class="btn btn-primary">Submit</button>
    </form>
  </div>
  <div v-else>
    <h4>Updated successfully!</h4>
    <router-link class="btn btn-success" to="/"
      >Return to Employees</router-link
    >
  </div>
</template>

<script>
import EmployeeService from "../services/EmployeeService";
import { useRoute } from "vue-router";

export default {
  name: "Add Employee",
  beforeMount() {
    const route = useRoute();
    this.employeeId = route.params.id;
    this.getEmployee(route.params.id);
  },
  mounted() {},

  data() {
    return {
      employee: {
        name: "",
        phone: "",
        email: "",
      },
      submitted: false,
      employeeId: null,
    };
  },
  computed: {},
  methods: {
    submitEmployee() {
      let data = {
        name: this.employee.name,
        phone: this.employee.phone,
        email: this.employee.email,
      };
      EmployeeService.update(this.employeeId, data)
        .then((response) => {
          this.employee.id = response.data.id;
          console.log(response.data);
          this.submitted = true;
        })
        .catch((e) => {
          console.log(e);
        });
    },
    getEmployee(employeeId) {
      EmployeeService.get(employeeId)
        .then((response) => {
          this.employee = response.data;
          console.log(response.data);
        })
        .catch((e) => {
          console.log(e);
        });
    },
  },
};
</script>
