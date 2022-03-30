new Vue({
    el:'#vue-app',
    data: {
        name : 'Divesh',
        job : 'QA',
        website : 'https://github.com/Divesh23/Vue2Demo',
        websiteTag: '<a href="https://github.com/">My GitHub Link</a>',
        age: 25,
        x: 0,
        y: 0
    },
    methods: {
        greet : function(time){
            return 'Good ' + time + ', ' + this.name;
        },
        add : function(inc){
            this.age += inc;
        },
        subtract : function(dec){
            this.age -= dec;
        },
        showCoordinates: function(event){
            this.x = event.offsetX;
            this.y = event.offsetY;
        }
    }
});