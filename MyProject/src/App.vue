<template>
    <div>
        <button v-on:click="showAddBlogDetails"> Form </button>
        <button v-on:click="showShowBlogDetails"> Blogs </button>
        <button v-on:click="showShowAnotherBlogDetails"> Other Blogs </button>
        <div v-show="showAddBlog">
            <add-blog></add-blog>
        </div>
         <div v-show="showShowBlog">
           <show-blog></show-blog>
        </div>
        <div v-show="showShowAnotherBlog">
           <show-blog></show-blog>
        </div>
    </div>
</template>

<script>
// Imports
import addBlog from './components/addBlog.vue';
import showBlog from './components/showBlog.vue';
import showAnotherBlog from './components/showAnotherBlog.vue';

export default {
    components: {
        'add-blog': addBlog,
        'show-blog': showBlog,
        'show-another-blog': showAnotherBlog
    },
    data () {
        return {
            showAddBlog:false,
            showShowBlog:false,
            showShowAnotherBlog:false
        }
    },
    methods: {
        showAddBlogDetails: function(){
            this.showAddBlog = true;
            this.showShowBlog = false;
            this.showShowAnotherBlog = false;
        },
        showShowBlogDetails: function(){
            this.showAddBlog = false;
            this.showShowBlog = true;
            this.showShowAnotherBlog = false;
        },
        showShowAnotherBlogDetails: function(){
            this.showAddBlog = false;
            this.showShowBlog = false;
            this.showShowAnotherBlog = true;
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