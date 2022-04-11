<template>
    <div>
        <app-header v-bind:title="title"></app-header>
        <app-employee v-bind:employees="employees"></app-employee>
        <app-footer v-bind:title="title"></app-footer>
    </div>
</template>

<script>
// Imports
import Employees from './components/Employees.vue';
import Footer from './components/Footer.vue';
import Header from './components/Header.vue';
export default {
    components: {
        'app-employee': Employees,
        'app-footer': Footer,
        'app-header': Header
    },
    data () {
        return {
            title: 'Employee App',
            employees: [
              {id: 1,name: "John", age: 27,job: "Finance",show: false},
              {id: 2,name: "Divesh",age: 31,job: "QA Specialist",show: false},
              {id: 3,name: "David",age: 31,job: "Developer",show: false},
              {id: 4,name: "Ryan",age: 31,job: "DevOps",show: false},
              {id: 5,name: "Chris",age: 31,job: "Support",show: false},
              {id: 6,name: "Taylor",age: 31,job: "Manager",show: false}
          ]
        }
    }
}
</script>

<style scoped>
body{
    margin: 0;
    font-family: 'Nunito SemiBold';
}
h1{
  color:red;
}
</style>