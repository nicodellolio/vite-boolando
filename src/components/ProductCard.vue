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
    ],
    computed: {
        discount() {
            let _discount = 20 + this.price


            return _discount;
        }
    }
}       
</script>

<template>

    <div class="col mt-1 mb-4 ">
        <div class="card h-100">

            <div class="hearts">
                <div class="like">&hearts;</div>
            </div>

            <span v-if="badges[badges.length - 1].value != 'Sostenibilità'" class="discount">{{ badges[badges.length - 1].value }}</span>

            <span v-if="badges[0].type == 'tag'" class="eco" :class="{'noDiscount' : badges[0].value !== 'Sostenibilità'}">Sostenibilità</span>

            <img :src="'/public/img/' + frontImage" class="model w-100" alt="">

            <!-- <img :src="'/public/img/' + backImage" class="model" alt=""> -->

            <div class="brand">{{brand}}</div>
            <div class="description fw-bold text-uppercase">{{itemName}}</div>
            <div class="price">
                <span class="newprice"><strong v-if="badges[0].type == 'discount'">{{ discount + 'scontato &euro;'}}</strong></span>
                <span class="oldprice"><del>{{price + '&euro'}};</del></span>
            </div>

        </div>
    </div>

</template>


<style scoped lang='scss'>
@import '../assets/scss/partials/common_rules';
</style>
