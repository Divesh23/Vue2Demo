<template>
<div id="employees">
        <ul>
            <li v-for="employee in employees" :key="employee.id" v-on:click="employee.show = !employee.show">
                <h3>{{employee.name}}</h3>
                <h3 v-show="employee.show">Role : {{ employee.job }}</h3>
                <h3 v-show="employee.show">Age : {{ employee.age }}</h3>                
            </li>
        </ul>
        <hr>
        <button class="buttonStyle" v-on:click="deleteUser">Delete Employee</button>
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
    },
    methods:{
        deleteUser: function(){
            this.employees.pop();
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
.buttonStyle {
  background-color: #4CAF50; /* Green */
  border: none;
  color: white;
  padding: 15px 32px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
}
</style>