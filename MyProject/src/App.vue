<template>
    <div>
        <h1>{{ title }}</h1>
        <employee></employee>
    </div>
</template>

<script>
// Imports
import Employees from './Employees.vue';
export default {
    components: {
        'employee': Employees
    },
    data () {
        return {
          title: 'Ninja App'
        }
    }
}
</script>

<style scoped>
h1{
  color:red;
}
</style>