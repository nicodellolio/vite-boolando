<script>
import { state } from '../state.js';
import DayCard from './DayCard.vue';
import MyModal from './MyModal.vue';

export default {
    name: 'AppMain',
    components: {
        DayCard,
        MyModal
    },
    data() {
        return {
            state, //state : state,//
            isModalOpen: false,
            close: false,
            selectedDay: null,
            days: []
        };
    },
    methods: {

        showModal(day) {
            this.selectedDay = day;
            this.isModalOpen = true;
            console.log(this.isModalOpen);
        },
        closeModal() {
            this.isModalOpen = false;
            console.log(this.isModalOpen);
        }
    },
    mounted(){
        this.state.getDays('http://localhost:3000/days');
    }
};

</script>

<template>
    <main id="site_main">
        <div class="container-fluid">

            <div style="font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; font-weight: 900;"
                class="cityName display-1 px-5 pb-5">
                Melbourne
            </div>

            <div class="row row-cols-1 row-cols-sm-4 px-5">

                <DayCard v-for="day in state.days"
                :day="day"
                :key="day.id" 
                :frontImage="day.frontImage"
                :city="day.city"
                :date="day.date"
                :stops="day.stops"
                :accomodation="day.accomodation"
                :expected_expenses="day.expected_expenses" 
                :open="isModalOpen"
                @show-modal="showModal"
                />

            </div>

        </div>

        <MyModal v-if="isModalOpen" :open="isModalOpen" :day="selectedDay" @close="closeModal" />


    </main>

</template>

<style lang="scss">
@import '../assets/scss/partials/_main.scss';
</style>
