<template>
<div>
    <h1>Employees in the company</h1>
    <ul>
        <li v-for="employee in employees" :key="employee">{{ employee }}</li>
    </ul>
</div>
</template>

<script>
export default {
    data () {
        return {
          employees: ['Divesh', 'Mario', 'David']
        }
    }
}
</script>

<style scoped>
h1{
    color:green;
}
</style>