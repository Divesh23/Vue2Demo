<template>
    <div id="blog" v-theme:column="'slim'"> 
        <br><br><h1>Blogs</h1><br><br>
        <input type="text" v-model="search" placeholder="searchBlog"/>
        <div v-for="blog in filteredBlogs" :key="blog.title">
            <ul>
                <li><h2 v-rainbow> Title: {{ blog.title | to-uppercase }}</h2>
                 <p v-green>Body: {{ blog.body | snippet | toLowerCase }} </p></li>
            </ul>
            
        </div>
    </div>
</template>

<script>
import searchBlog from '../mixins/searchBlog'
export default {
    data () {
        return {
            blogs:[],
            search:''
        }
    },
    methods: {
    },
    created() {
        this.$http.get('http://jsonplaceholder.typicode.com/posts').then(function(data) {
            this.blogs = data.body.slice(0, 12);
            console.log(data);
        });

    },
    computed:{
    },
    filters:{
        /*'to-lowercase': function(value) {
            return value.toString().toLowerCase();
        },*/
        toLowerCase(value){
            return value.toString().toLowerCase();
        }
    },
    directives:{
        'green':{
            bind(el,binding,vnode){
                el.style.color='green';
            }
        }
    },
    mixins:[searchBlog]
}
</script>

<style scoped>
#blog {
    height: 200vh;
    background: #666666;
    font-family: 'Balsamiq Sans', sans-serif;
    width: 200%;
    max-width: 1200px;
    margin: 40px auto;
    padding: 0 20px;
    box-sizing: border-box;
    text-align: center;
}

h1{
    text-align: center;
    border: 3px solid black;
}
</style>