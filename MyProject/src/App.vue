<template>
    <div>
        <add-blog></add-blog>
        <show-blog></show-blog>
    </div>
</template>

<script>
// Imports
import addBlog from './components/addBlog.vue';
import showBlog from './components/showBlog.vue';

export default {
    components: {
        'add-blog': addBlog,
        'show-blog': showBlog
    },
    data () {
        return {
            
        }
    },
    methods: {
       
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