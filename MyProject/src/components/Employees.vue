<template>
<div id="employees">
        <ul>
            <li v-for="employee in employees" :key="employee" v-on:click="employee.show = !employee.show">
                <h3>{{employee.name}}</h3>
                <h3 v-show="employee.show">Role : {{ employee.job }}</h3>
                <h3 v-show="employee.show">Age : {{ employee.age }}</h3>
            </li>
        </ul>
</div>
</template>

<script>
export default {
    data () {
        return {
          employees: [
              {name: "John", age:27,job: "Finance",show: false},
              {name: "Divesh",age:31,job: "QA Specialist",show: false},
              {name: "David",age:31,job: "Developer",show: false},
              {name: "Ryan",age:31,job: "DevOps",show: false},
              {name: "Chris",age:31,job: "Support",show: false},
              {name: "Taylor",age:31,job: "Manager",show: false},
          ]
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