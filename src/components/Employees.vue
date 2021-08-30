<template>
  <h2 class="d-flex justify-content-between mb-4">
    All Employees
    <router-link to="/add" class="btn btn-primary">Add new</router-link>
  </h2>
  <table v-if="employees.length" class="table table-bordered table-striped">
    <thead>
      <tr>
        <th
          class="text-left"
          scope="col"
          v-for="header in headers"
          :key="header.id"
        >
          {{ header.text }}
        </th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="emp in employees" :key="emp.id">
        <td class="text-left" scope="row">
          <b>{{ emp.id }}</b>
        </td>
        <td class="text-left" scope="row">{{ emp.name }} <br /></td>
        <td class="text-left" scope="row">
          {{ emp.phone }}
        </td>
        <td class="text-left" scope="row">
          {{ emp.email }}
        </td>
        <td class="text-left" scope="row">
          <router-link
            :to="'/employee/' + emp.id"
            class="btn btn-sm btn-outline-primary mr-2"
            >Edit</router-link
          >
          <button type="button" class="btn btn-sm btn-outline-danger">
            Remove
          </button>
        </td>
      </tr>
    </tbody>
  </table>
  <p v-if="!employees.length">
    <span>No employees</span>
  </p>
</template>

<script>
import EmployeeService from "../services/EmployeeService";

export default {
  name: "Employees",
  computed: {
    headers() {
      return [
        {
          id: 0,
          text: "Id",
          value: "id",
        },
        {
          id: 1,
          text: "Name",
          value: "name",
        },
        {
          id: 2,
          text: "Phone",
          value: "phone",
        },
        {
          id: 3,
          text: "Email",
          value: "email",
        },
      ];
    },
  },
  data() {
    return {
      employees: [],
    };
  },
  mounted() {
    this.retrieveEmployees();
  },
  methods: {
    retrieveEmployees() {
      EmployeeService.getAll()
        .then((response) => {
          this.employees = response.data;
          console.log(response.data);
        })
        .catch((e) => {
          console.log(e);
        });
    },
  },
};
</script>
