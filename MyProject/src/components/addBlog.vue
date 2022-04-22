<template>
    <div id="blog">
        <form class = card>
            <h1>The Form</h1>
            <label>Enter your Name</label><br>
            <input type="text" required v-model.lazy="blog.name"/> <br>
            <label> Enter your content:</label><br>
            <textarea name="texbox" id="" cols="30" rows="10" required v-model.lazy="blog.content"/>
            <br>
            <h3>Preview: </h3>
            <p>Name:{{ blog.name }}</p> 
            <p>Content:</p>
            <p>{{ blog.content }}</p>
            <div class="checkbox">
                <label>For All Viewers</label>
                <input type="checkbox" value="all" v-model="blog.categories"/>
                <label>For Paid Viewers</label>
                <input type="checkbox" value="paid" v-model="blog.categories"/>
            </div>
            <p>Checked Values</p>
            <ul>
                <li v-for="category in blog.categories " :key="category">{{ category }}</li>
            </ul>
        </form>
    </div>
</template>

<script>
export default {
    data () {
        return {
            blog: {
                name:'',
                content:'',
                categories:[],
            }
        }
    },
    methods:{
        
    }
}
</script>

<style scoped>
#blog {
    height: 100vh;
    background: #666666;
    font-family: 'Balsamiq Sans', sans-serif;
    width: 100%;
    max-width: 1200px;
    margin: 40px auto;
    padding: 0 20px;
    box-sizing: border-box;
}

.card {
  width: 70%;
  padding: 30px 90px 90px 90px;
  border: 6px solid rgba(0, 0, 0, 0.3);
  box-shadow: 20px 20px 0 rgba(0, 0, 0, 0.3);
  border-radius: 50px;
  position: relative;
}

.card h1 {
  color: rgba(0, 0, 0, 0.3);
  font-size: 60px;
  text-transform: uppercase;
}


</style>