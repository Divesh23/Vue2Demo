<template>
    <div>
        <button v-on:click="showAddBlogDetails"> Form </button>
        <button v-on:click="showShowBlogDetails"> Blogs </button>
        <div v-show="showAddBlog">
            <add-blog></add-blog>
        </div>
         <div v-show="showShowBlog">
           <show-blog></show-blog>
        </div>
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
            showAddBlog:false,
            showShowBlog:false
        }
    },
    methods: {
        showAddBlogDetails: function(){
            this.showAddBlog = true;
            this.showShowBlog = false;
        },
        showShowBlogDetails: function(){
            this.showAddBlog = false;
            this.showShowBlog = true;
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