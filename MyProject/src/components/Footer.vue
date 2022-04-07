<template>
<div>
    <footer>
        <p>{{ copyright}}</p>
    </footer>
</div>
</template>

<script>
export default {
    data () {
        return {
            copyright: "© Copyright Divesh David"
        }
    }
}
</script>

<style scoped>
footer{
    background: black;
    padding: 6px;
}

p{
    color: lightblue;
    text-align: center;
}
</style>