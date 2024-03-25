<script>
import ProductCard from './ProductCard.vue';
export default {
    name: 'AppHeader',

    data() {
        return {
            wishlist: false,
            targets: ['Donna', 'Uomo', 'Bambino'],
            hIcons: ['user', 'heart', 'shopping-bag']
        }
    }
}

</script>

<template>
    <!-- /#site_header -->
    <header id="site_header">
        <!-- /#target -->
        <div class="target">
            <ul class="target_list">
                <li v-for="target in targets">{{ target }}</li>
            </ul>
        </div>
        <!-- /#logo -->
        <div id="logo">
            <img src="/img/boolean-logo.png" alt="">
        </div>
        <!-- /#call_to_action -->
        <div id="call_to_action">
            <img v-for="icon in hIcons" :src="'/img/' + icon + '.svg'" alt="">
            <span v-if="wishlist">OH TESSS</span>
        </div>
    </header>

    <img src="" alt="">
</template>

<style lang="scss">
@use '../assets/scss/partials/_header.scss';
</style>
