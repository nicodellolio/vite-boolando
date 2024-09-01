<script>
import { state } from '../state';


export default {
    name: 'DayCard',
    components: {

    },
    props: [
        'day',
        'identifier',
        'frontImage',
        'city',
        'date',
        'stops',
        'accomodation',
        'expected_expenses',
        'open',
    ],
    data() {
        return {
            state,
            hover: false,
            hoverHeart: false,
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

    <div class="col mt-1 mb-4 ">
        <div class="card h-100 p-4" :class="[open ? 'blur' : '', state.close ? 'no-blur' : '']" @click="$emit('show-modal', day)">

            <img :src="'/img/' + frontImage" class="front model w-100 rounded-2" alt="" >

            <div class="brand ms-1">{{  }}</div>
            <div  class="description fw-bold text-uppercase ms-1 fs-1">Day {{ day.id }}
            </div>

            <div class="ms-1">
                <span class="date fw-bold fs-6 me-2">{{ day.date }}</span>
            </div>

            <span class="city position-absolute bottom-0 end-0 text-uppercase p-1">
                {{ day.city }}
            </span>

        </div>
    </div>


</template>


<style scoped lang='scss'>
@import '../assets/scss/partials/common_rules';

.card{
    cursor: pointer;
}


</style>
