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
            day: null,
            open: false,
        }
    },
    methods:{
        openModal(day){
            this.day = day;


            this.open = true;
            console.log(day.id);
            console.log(this.open);
        },
        closeModal(){
            this.open = false;
            console.log(this.open);
        }
    },
    mounted(){
        this.state.getDays('http://localhost:3000/days')
    }
};

</script>

<template>
    <main id="site_main">
        <div class="container-fluid">

            <div style="font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; font-weight: 900;" class="cityName display-1 px-5 pb-5">
                Melbourne
            </div>

            <div class="row row-cols-1 row-cols-sm-4 px-5">

                <DayCard v-for="day in state.days"
                :day="day"
                :identifier="day.id" 
                :frontImage="day.frontImage"
                :backImage="day.backImage" 
                :brand="day.brand" 
                :itemName="day.itemName"
                :price="day.price" 
                :isInFavorites="day.isInFavorites" :badges="day.badges" 
                :description="day.description"
                @show-modal="openModal"
                />

            </div>
            
        </div>

        <div v-if="open">
            <MyModal :open="open" :day="day" />
        </div>
    </main>

</template>

<style lang="scss">
    @import '../assets/scss/partials/_main.scss';
</style>
