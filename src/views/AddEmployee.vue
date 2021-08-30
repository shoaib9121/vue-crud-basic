<template>
  <h2 class="mb-4">Add Employee</h2>
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
        <small id="emailHelp" class="form-text text-muted"
          >We'll never share your email with anyone else.</small
        >
      </div>
      <button type="submit" class="btn btn-primary">Submit</button>
    </form>
  </div>
  <div v-else>
    <h4>Employee added successfully!</h4>
    <router-link class="btn btn-outline-primary mr-3" to="/"
      >Return to Employees</router-link
    >
    <button class="btn btn-success" @click="newEmployee">Add more</button>
  </div>
</template>

<script>
import EmployeeService from "../services/EmployeeService";
export default {
  name: "Add Employee",
  data() {
    return {
      employee: {
        name: "",
        phone: "",
        email: "",
      },
      submitted: false,
    };
  },
  computed: {},
  methods: {
    newEmployee() {
      this.submitted = false;
      this.employee = {};
    },
    submitEmployee() {
      let data = {
        name: this.employee.name,
        phone: this.employee.phone,
        email: this.employee.email,
      };
      /**
       * Hardcoded other employee's info as not taking from form fields
       */
      let staticInfo = {
        id: Math.ceil(Math.random() * 1000),
        username: "Bret",
        website: "hildegard.org",
        address: {
          street: "Kulas Light",
          suite: "Apt. 556",
          city: "Gwenborough",
          zipcode: "92998-3874",
          geo: {
            lat: "-37.3159",
            lng: "81.1496",
          },
        },
        company: {
          name: "Romaguera-Crona",
          catchPhrase: "Multi-layered client-server neural-net",
          bs: "harness real-time e-markets",
        },
      };
      let newData = { ...staticInfo, ...data };
      EmployeeService.create(newData)
        .then((response) => {
          this.employee.id = response.data.id;
          console.log(response.data);
          this.submitted = true;
        })
        .catch((e) => {
          console.log(e);
        });
    },
  },
};
</script>
