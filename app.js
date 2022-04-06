Vue.component('greeting',{
    template: '<p>This is a component</p>'
});

var one = new Vue({
    el:'#vue-app',
    data: {
        name : 'Divesh',
        job : 'QA',
        website : 'https://github.com/Divesh23/Vue2Demo',
        websiteTag: '<a href="https://github.com/">My GitHub Link</a>',
        age: 25,
        x: 0,
        y: 0,
        comment:'',
        a: 0,
        available: false,
        nearby: false,
        error: false,
        success: false,
        show: false,
        employees: ['Divesh','David'],
        records:[
            {name:'Divesh' ,age:31},
            {name:'David' ,age:25}
        ],
        output: 'Nothing'

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
        },
        click: function(){
            alert('You have alerted me! Cannot Proceed to Search!');
        },
        alertReason: function(){
            alert('You Entered Your Reason');
        },
        alertDate: function(){
            alert('You Entered Your Date Of Joining');
        },
        changeOutput: function(){
            console.log(this.$refs);
            this.output=this.$refs.input.value;
        }
    },
    computed: {
        addToA: function(){
            return this.age + this.a
        },
        compClass: function(){
            return{
                available: this.available,
                nearby: this.nearby,
            }
        }

    }
});

var two = new Vue({
    el:  '#vue-app-2',
    data: {
        title: 'This is the Seconds Instance',
        salary: 1000000
    },
    methods: {

    },
    computed: {
        changeJob: function(){
            one.job='Front End Developer'
        }

    }
});

var three = new Vue({
    el: '.template',
    template: '<p>This is a Standard Template</p>'
});

two.salary = 2000000;