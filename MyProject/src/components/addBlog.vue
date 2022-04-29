<template>
    <div id="blog">
        <form class = "card">
            <h1>The Form</h1>
            <div v-if="!submitted">
            <label>Enter your Name</label><br>
            <input type="text" required v-model.lazy="blog.name"/> <br><br>
            <label> Enter your content:</label><br>
            <textarea name="texbox" id="" cols="30" rows="10" required v-model.lazy="blog.content"/>
            <br><br>
            <div class="checkbox">
                <label>For Non Paid Viewers</label>
                <input type="checkbox" value="nonPaid" v-model="blog.categories"/>
                <label>For Paid Viewers</label>
                <input type="checkbox" value="Paid" v-model="blog.categories"/>
            </div><br>
            <label>Select Any Value for Payment</label>
            <select v-model="blog.paymentOption">
            <option v-for="paymentOption in paymentOptions" :key="paymentOption"> {{ paymentOption }}</option>
            </select>
            </div>
            <br><br>
            <h3>Preview: </h3>
            <p>Name:{{ blog.name }}</p> 
            <p>Content:</p>
            <p>{{ blog.content }}</p>
            <p>Checked Values</p>
            <ul>
                <li v-for="category in blog.categories " :key="category">{{ category }}</li>
            </ul>
            <p>Payment Option: {{ blog.paymentOption}}</p>
            <button v-on:click.prevent="post">Submit Form</button>
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
                paymentOption:''
            },
            paymentOptions:['Credit Card','PayPal','Cash','E-Transfer'],
            submitted:false
        }
    },
    methods: {
        post: function(){
            this.$http.post('http://jsonplaceholder.typicode.com/posts', {
                title: this.blog.name,
                body: this.blog.content,
                userId: 1
            }).then(function(data){
                console.log(data);
                this.submitted = true;
            });
        }
    }
}
</script>

<style scoped>
#blog {
    height: 150vh;
    background: #666666;
    font-family: 'Balsamiq Sans', sans-serif;
    width: 200%;
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

.checkbox input {
    margin-right: 30px;
}
</style>