<script>

import MyModal from '../components/MyModal.vue';

export default {
    name: 'ProductCard',
    components: {
        MyModal
    },
    props: [
        'identifier',
        'frontImage',
        'backImage',
        'brand',
        'itemName',
        'price',
        'isInFavorites',
        'badges',
        'description'
    ],
    data() {
        return {
            hover: false,
            hoverHeart: false,
            open: false,
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

    <MyModal />

    <!-- <div v-if="open" class="card_modal d-flex" role="dialog" aria-labelledby="modalTitle" aria-describedby="modalDescription">
        <div class="image_box ">
            <img class="frontMod mt-2" :src="'/img/' + frontImage" alt="">
            <img class="backMod mt-2" :src="'/img/' + backImage" alt="">
        </div>

        <div class="textMod">

            <h3 class="nameMod fw-bolder mt-2 text-uppercase" >{{ itemName }}</h3>
            <h5 class="brandMod">{{ brand }}</h5>
            
            <div @click="like()" :class="{ active: hoverHeart }" class="hearts">
                <div class="like modalLike"> Add to wishlist &hearts;</div>
            </div>           
            <div class="like cart"> Add to the cart 🛒 </div>

            <div class="descriptionTextMod">
                <p>{{ description }}</p>
            </div>
            
            <div class="priceMod ms-1">
                <span class="newpriceMod fw-bold" v-if="badges[badges.length - 1].type == 'discount'">{{ (price /
                100 * (100 - Math.abs((parseInt(badges[badges.length - 1].value))))).toFixed(2) + '&euro;' }}</span>

                <span
                :class="{ 'noDiscount': badges[badges.length - 1].value != 'Sostenibilità' && badges[badges.length - 1].value != null }"
                class="oldprice ms-1">{{ price + '&euro;'}}
                </span>
            </div>

        </div>

        <button aria-label="Close modal" class="modal_btn" @click="open = false">X</button>
    </div> -->

    <div class="col mt-1 mb-4 ">
        <div @mouseover="hover = true" @mouseleave="hover = false" class="card h-100">

            <div @click="like()" :class="{ active: hoverHeart }" class="hearts">
                <div class="like">&hearts;</div>
            </div>

            <span v-if="badges[badges.length - 1].type == 'discount'" class="discount">{{ badges[badges.length -
        1].value }}</span>

            <span v-if="badges[0].type == 'tag'" class="eco"
                :class="{ 'noDiscount': badges[0].value !== 'Sostenibilità' }">Sostenibilità</span>

            <img v-if="hover" :src="'/img/' + backImage" class="back model w-100" alt="">

            <img v-else :src="'/img/' + frontImage" class="front model w-100" alt="">

            <div class="brand ms-1">{{ brand }}</div>
            <div @click="open = true" class="description fw-bold text-uppercase ms-1">{{ itemName }}</div>

            <div class="price ms-1">
                <span class="newprice fw-bold fs-6 me-2" v-if="badges[badges.length - 1].type == 'discount'">{{ (price /
                100 * (100 - Math.abs((parseInt(badges[badges.length - 1].value))))).toFixed(2) + '&euro;' }}</span>

                <span
                    :class="{ 'noDiscount': badges[badges.length - 1].value != 'Sostenibilità' && badges[badges.length - 1].value != null }"
                    class="oldprice ms-1">{{ price + '&euro;'}}
                </span>
            </div>

        </div>
    </div>

</template>


<style scoped lang='scss'>
@import '../assets/scss/partials/common_rules';
</style>
