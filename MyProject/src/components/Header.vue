<template>
<div>
    <header>
        <h1 v-on:click="changeTitle"> {{ greeting }}-{{ title }}</h1>
    </header>
</div>
</template>

<script>
import {bus} from '../main'
export default {
    props:{
        title: {
            type: String,
            required: true,
        }
    },
    data () {
        return {
            greeting: 'Welcome To Our Employee Page'
        }
    },
    methods:{
        changeTitle: function(){
            //this.$emit('changeTitle','New Value');
            this.title = 'Divesh'
            bus.$emit('titleChanged','Divesh');
        }
    }
}
</script>

<style scoped>
header{
    background: lightblue;
    padding: 10px;
}
h1{
    color: #222;
    text-align: center;
}
</style>