<script>
export default {
    name: 'MyModal',
    props: [
        'open',
        'product'
    ],
    data() {
        return {
            hoverHeart: false
        }
    },
    methods: {
        like() {
            this.hoverHeart = true;
        }
    }
}       
</script>

<template>

    <div v-if="open" class="card_modal d-flex" role="dialog" aria-labelledby="modalTitle" aria-describedby="modalDescription">
        <div class="image_box ">
            <img class="frontMod mt-2" :src="'/img/' + product.frontImage" alt="">
            <img class="backMod mt-2" :src="'/img/' + product.backImage" alt="">
        </div>

        <div class="textMod">

            <h3 class="nameMod fw-bolder mt-2 text-uppercase" >{{ product.itemName }}</h3>
            <h5 class="brandMod">{{ product.brand }}</h5>
            
            <div @click="like()" :class="{ active: hoverHeart }" class="hearts">
                <div class="like modalLike"> Add to wishlist &hearts;</div>
            </div>           
            <div class="like cart"> Add to the cart 🛒 </div>

            <div class="descriptionTextMod">
                <p>{{ product.description }}</p>
            </div>
            
            <div class="priceMod ms-1">
                <span class="newpriceMod fw-bold" v-if="product.badges[product.badges.length - 1].type == 'discount'">{{ (product.price /
                100 * (100 - Math.abs((parseInt(product.badges[product.badges.length - 1].value))))).toFixed(2) + '&euro;' }}</span>

                <span
                :class="{ 'noDiscount': product.badges[product.badges.length - 1].value != 'Sostenibilità' && product.badges[product.badges.length - 1].value != null }"
                class="oldprice ms-1">{{ product.price + '&euro;'}}
                </span>
            </div>

        </div>

        <button aria-label="Close modal" class="modal_btn" @click="open = false">X</button>
    </div>

</template>


<style scoped lang='scss'>
@import '../assets/scss/partials/common_rules';
</style>
