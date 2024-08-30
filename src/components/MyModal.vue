<script>
export default {
    name: 'MyModal',
    props: [
        'open',
        'day'
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
            <img class="frontMod mt-2" :src="'/img/' + day.frontImage" alt="">
            <img class="backMod mt-2" :src="'/img/' + day.backImage" alt="">
        </div>

        <div class="textMod">

            <h3 class="nameMod fw-bolder mt-2 text-uppercase" >DAY {{ day.id }}</h3>
            
            <div @click="like()" :class="{ active: hoverHeart }" class="hearts">
                <div class="like modalLike"> Add to wishlist &hearts;</div>
            </div>           
            <div class="like cart"> Add to the cart 🛒 </div>

            <div class="descriptionTextMod">

                <span v-if="day.id == 1">The first </span>
                <span v-else-if="day.id == 2">The second </span>
                <span v-else-if="day.id == 3">The third </span>
                <span v-else-if="day.id > 3">The {{ day.id }}th day </span>


                <p class="d-inline">day of our trip sees us go right to {{ day.stops[0].name}} to spend half of our day and stop for lunch nearby. Then we'll take a walk or rent a bike to {{ day.stops[1].name}}</p>
            </div>


        </div>

        <button aria-label="Close modal" class="modal_btn" @click="open = false">X</button>
    </div>

</template>


<style scoped lang='scss'>
@import '../assets/scss/partials/common_rules';
// @import '../assets/scss/partials/main.scss';
</style>
