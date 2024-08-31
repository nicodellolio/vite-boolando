<script>
import DayCard from './DayCard.vue';
export default {
    name: 'AppHeader',

    data() {
        return {

        }
    }
}

</script>

<template>
    <!-- /#site_header -->
    <header id="site_header">
        <!--         
        <div class="target">
            <ul class="target_list">
                <li v-for="target in targets">{{ target }}</li>
            </ul>
            <div id="call_to_action">
                <img v-for="icon in hIcons" :src="'/img/' + icon + '.svg'" alt="">
            </div> 
        </div>
        -->
        <div id="logo">
            My Trip to <span style="color: blue;">Australia</span>
        </div>
    </header>

    <img src="" alt="">
</template>

<style lang="scss">
@use '../assets/scss/partials/_header.scss';
</style>
