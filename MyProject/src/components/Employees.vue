<template>
<div id="employees">
        <ul>
            <li v-for="employee in employees" :key="employee.id" v-on:click="employee.show = !employee.show">
                <h3>{{employee.name}}</h3>
                <h3 v-show="employee.show">Role : {{ employee.job }}</h3>
                <h3 v-show="employee.show">Age : {{ employee.age }}</h3>
            </li>
        </ul>
</div>
</template>

<script>
export default {
    props:{
        employees: {
            type: Array,
            required: true
        }
    },
    data () {
        return {
        }
    }
}
</script>

<style scoped>
#employees{
    width: 100%;
    max-width: 1200px;
    margin: 40px auto;
    padding: 0 20px;
    box-sizing: border-box;
}
ul{
    display: flex;
    flex-wrap: wrap;
    list-style-type: none;
    padding: 0;
}
li{
    flex-grow: 1;
    flex-basis: 300px;
    text-align: center;
    padding: 30px;
    border: 1px solid #222;
    margin: 10px;
    background-color: #DFCFBE;
}
</style>