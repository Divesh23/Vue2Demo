export default{
    computed:{
        filteredBlogs:function(){
            return this.blogs.filter((blog) =>{
                return blog.title.toLowerCase().match(this.search.toLowerCase());
            });
        }
    }
};