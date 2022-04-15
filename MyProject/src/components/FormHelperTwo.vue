<template>
    <form>
        <div class="formHeader">
            <slot name ="form-header"></slot>
        </div>
         <div class="formFields">
            <slot name ="form-fields"></slot>
        </div>
        <div class="formFields">
            <slot name ="form-controls"></slot>
        </div>
        <div class="formLinks">
            <slot name ="form-links">
                <ul>
                  <li> <a href="https://google.com">Google2</a></li>
                  <li> <a href="https://facebook.com">Facebook2</a></li>
                </ul>
            </slot>
        </div>
    </form>
</template>

<script>
export default {
    data () {
        return {
        }
    }
}
</script>

<style scoped>
.formHeader {
    text-align: center;
    color: blue;
}
.formFields{
    color: lightblue;
    text-align: center;
}
.formLinks{
    color: red;
    text-align: center;
}
</style>