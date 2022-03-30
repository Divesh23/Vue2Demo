new Vue({
    el:'#vue-app',
    data: {
        name : "Divesh",
        job : "QA"
    },
    methods: {
        greet : function(time){
            return 'Good ' + time + ', ' + this.name;
        }   
    }
});