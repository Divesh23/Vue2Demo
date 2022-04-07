<template>
    <div>
        <app-header></app-header>
        <app-employee></app-employee>
        <app-footer></app-footer>
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
          title: 'Employee App'
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