<template>
<div>
    <header>
        <h1> {{ greeting }}</h1>
    </header>
</div>
</template>

<script>
export default {
    data () {
        return {
            greeting: 'Welcome To Our Employee Page'
        }
    }
}
</script>

<style scoped>
header{
    background: lightblue;
    padding: 10px;
}
h1{
    color: #222;
    text-align: center;
}
</style>