<template>
    <div id="blog">
        <form class = card>
            <h1>The Form</h1>
            <p>Enter your Name</p>
            <input type="text" required v-model="name"/> 
            <p> Enter your content:</p>
            <textarea name="texbox" id="" cols="30" rows="10" required v-model="content"/>
            <br>
            <h3>Preview: </h3>
            <p>Name:{{ name }}</p> 
            <p>Content:</p>
            <p>{{ content }}</p>
        </form>
    </div>
</template>

<script>
export default {
    data () {
        return {
            name:'',
            content:''
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