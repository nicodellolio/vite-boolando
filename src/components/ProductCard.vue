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
        // discount() {
        //     let _discount = (this.price / 100 * ( 100 - (parseInt(badges[badges.length - 1].value))))

        //     ((29.99 / 100) * Math.abs((100 - parseInt('-40%')))).toFixed(2)


        //     return _discount.toFixed(2);
        // }
    }
}       
</script>

<template>

    <div class="col mt-1 mb-4 ">
        <div class="card h-100">

            <div class="hearts">
                <div class="like">&hearts;</div>
            </div>

            <span v-if="badges[badges.length - 1].type == 'discount'" class="discount">{{ badges[badges.length - 1].value }}</span>

            <span v-if="badges[0].type == 'tag'" class="eco" :class="{'noDiscount' : badges[0].value !== 'Sostenibilità'}">Sostenibilità</span>

            <img :src="'/public/img/' + frontImage" class="front model w-100" alt="">

            <img :src="'/public/img/' + backImage" class="back model w-100" alt="">

            <div class="brand ms-1">{{brand}}</div>
            <div class="description fw-bold text-uppercase ms-1">{{itemName}}</div>
            
            <div class="price ms-1">
                <span class="newprice fw-bold fs-6 me-2" v-if="badges[badges.length - 1].type == 'discount'">{{ (price / 100 * ( 100 - Math.abs((parseInt(badges[badges.length - 1].value))))).toFixed(2) + '&euro;'}}</span>

                <span :class="{'noDiscount' : badges[badges.length - 1].value != 'Sostenibilità' &&  badges[badges.length - 1].value != null}" class="oldprice ms-1">{{price + '&euro;'}}</span>
            </div>

        </div>
    </div>

</template>


<style scoped lang='scss'>
@import '../assets/scss/partials/common_rules';
</style>
