<template>
    <div>
        <app-form-helper>
            <div slot="form-header">
                <h1>Registerations</h1>
            </div>
             <div slot="form-fields">
                <input type="text" placeholder="Name" required/><br>
                <input type="password" placeholder="Password" required/>
            </div><br>
            <div slot="form-controls">
              <button v-on:click="submitForm()">Submit</button>
            </div>
            <div slot="form-links">
            </div>
        </app-form-helper>
        <keep-alive>
        <components v-bind:is="component"></components>
        </keep-alive>
        <button v-on:click="component='app-form-helper'">Show Form 1</button>
        <button v-on:click="component='app-form-helper-2'">Show Form 2</button>
     </div>
</template>

<script>
// Imports
import FormHelper from './components/FormHelper.vue';
import FormHelperTwo from './components/FormHelperTwo.vue';
export default {
    components: {
        'app-form-helper': FormHelper,
        'app-form-helper-2': FormHelperTwo
    },
    data () {
        return {
            component:'app-form-helper',
            title: 'Employee App'
        }
    },
    methods: {
        submitForm: function(){
            alert('Thank you for submitting the form');
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