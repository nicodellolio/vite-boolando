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
        },
        closeModal() {
            this.$emit('close');
        }
    }
}       
</script>

<template>

    <div v-if="open" class="card_modal d-flex" role="dialog" aria-labelledby="modalTitle"
        aria-describedby="modalDescription">
        <div class="image_box ">
            <img class="frontMod mt-2 h-100"  :src="'/img/' + day.frontImage" alt="">
        </div>

        <div class="textMod">

            <h3 class="nameMod fw-bolder mt-2 text-uppercase">DAY {{ day.id }}</h3>
<!-- 
            <div @click="like()" :class="{ active: hoverHeart }" class="hearts">
                <div class="like modalLike"> Add to wishlist &hearts;</div>
            </div> -->

            <div class="descriptionTextMod">
                
                <ul class="mb-3">
                    <li>
                        <h3>Stop n.1</h3>
                        <h1 class="fw-bold mb-3">{{ day.stops[0].name }}</h1>
                    </li>
                    <li>
                        <h3>Stop n.2</h3>
                        <h1 class="fw-bold mb-3">{{ day.stops[1].name }}</h1>
                    </li>
                    <li>
                        <h3>Stop n.3</h3>
                        <h1 class="fw-bold mb-3">{{ day.stops[2].name }}</h1>
                    </li>

                </ul>

                <span v-if="day.id == 1">The first </span>
                <span v-else-if="day.id == 2">The second </span>
                <span v-else-if="day.id == 3">The third </span>

                <span v-else-if="day.id > 3">The {{ day.id }}th day </span>
                <p class="d-inline">
                    day of our trip sees us go right to {{ day.stops[0].name }} famous for the unique {{ day.stops[0].note }} to spend half of our day
                    and stop for lunch nearby. Then we'll take a walk or rent a bike to {{ day.stops[1].name }}.
                    Eventually right before dinner our last stop for the day is going to be {{ day.stops[2].name }} to make sure not to miss the amazing {{ day.stops[2].note }}.
                    The accomodation for the night will be at {{ day.accomodation }}. The expected expenses for our
                    <span v-if="day.id == 1">first </span>
                    <span v-else-if="day.id == 2">second </span>
                    <span v-else-if="day.id == 3">third </span>
                    <span v-else-if="day.id > 3">{{ day.id }}th </span>
                    day of trip are around ${{ day.expected_expenses }}.
                </p>
            </div>


            
        </div>


        <button aria-label="Close modal" class="modal_btn" @click="open = false">X</button>
    </div>

</template>


<style scoped lang='scss'>
@import '../assets/scss/partials/common_rules';
// @import '../assets/scss/partials/main.scss';</style>
