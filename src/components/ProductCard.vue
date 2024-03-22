<script>
export default {
    name: 'ProductCard',
    props: [
        'id',
        'frontImage',
        'backImage',
        'brand',
        'itemName',
        'price',
        'isInFavorites',
        'badges']
}       
</script>

<template>

    <div class="col">
        <div class="card">

            <div class="hearts">
                <div class="like">&hearts;</div>
            </div>
            <span v-if="badges[0].type == 'discount'" class="discount">{{ badges.value }}</span>
            <span class="eco">Sostenibilità</span>

            <img src="/public/img/1.webp" class="top-left model to_hover" alt="">
            <img src="/public/img/1b.webp" alt="" class="top-left model to_hide">
            <div class="brand">Levi's</div>
            <div class="description"><strong>RELAXED FIT TEE UNISEX</strong></div>
            <div class="price">
                <span class="newprice"><strong>14,99 &euro;</strong></span>
                <span class="oldprice"><del>29,99 &euro;</del></span>
            </div>

        </div>
    </div>

</template>


<style scoped lang='scss'>
@import '../assets/scss/partials/common_rules';
</style>
