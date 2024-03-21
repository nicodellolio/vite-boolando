<script>
export default {
    name: 'AppHeader',

    data() {
        targets: ['Donna', 'Uomo', 'Bambino'];
        hIcons: ['user.svg', 'heart.svg', 'shopping-bag.svg']
    }
}

</script>

<template>
    <!-- /#site_header -->
    <header id="site_header">
        <!-- /#target -->
        <div class="target">
            <ul class="target">
                <li v-for="target in targets">{{ target }}</li>
            </ul>
        </div>
        <!-- /#logo -->
        <div id="logo">
            <img src="/public/img/boolean-logo.png" alt="">
        </div>
        <!-- /#call_to_action -->
        <div id="call_to_action">
            <!-- <img v-for="icon in hIcons" :src=icon alt=""> -->
        </div>
    </header>

    <img src="" alt="">
</template>

<style lang="scss">
@use '../assets/scss/partials/_header.scss';
</style>
