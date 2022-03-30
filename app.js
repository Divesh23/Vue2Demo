new Vue({
    el:'#vue-app',
    data: {
        name : 'Divesh',
        job : 'QA',
        website : 'https://github.com/Divesh23/Vue2Demo'
    },
    methods: {
        greet : function(time){
            return 'Good ' + time + ', ' + this.name;
        }   
    }
});