<script>
export default {
    name: 'ProductCard',
    props: [
        'identifier',
        'frontImage',
        'backImage',
        'brand',
        'itemName',
        'price',
        'isInFavorites',
        'badges'
    ]
}       
</script>

<template>

    <div class="col">
        <div class="card">

            <div class="hearts">
                <div class="like">&hearts;</div>
            </div>

            <span class="discount">{{ badges.value }}</span>
            <span class="eco">Sostenibilità</span>

            <img :src="'/public/img/' + frontImage" class="top-left model to_hover" alt="">

            <img :src="'/public/img/' + backImage" class="top-left model to_hover" alt="">

            <div class="brand">{{brand}}</div>
            <div class="description"><strong>{{itemName}}</strong></div>
            <div class="price">
                <span class="newprice"><strong>{{'scontato &euro'}};</strong></span>
                <span class="oldprice"><del>{{price + '&euro'}};</del></span>
            </div>

        </div>
    </div>

</template>


<style scoped lang='scss'>
@import '../assets/scss/partials/common_rules';
</style>
