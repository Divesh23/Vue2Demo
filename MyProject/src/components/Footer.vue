<template>
<div>
    <footer>
        <p>{{ copyright}} -{{ title }}</p>
    </footer>
</div>
</template>

<script>
import {bus} from '../main'
export default {
    props:{
        title:{
            type:String,
            required:true,
        }
    },
    data () {
        return {
            copyright: "© Copyright Divesh David"
        }
    },
    created (){
        bus.$on('titleChanged',(data) => {
            this.title = data;
        })
    }
}
</script>

<style scoped>
footer{
    background: black;
    padding: 6px;
}

p{
    color: lightblue;
    text-align: center;
}
</style>