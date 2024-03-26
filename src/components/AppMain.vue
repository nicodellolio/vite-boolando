<script>
import { state } from '../state.js';
import ProductCard from './ProductCard.vue';

export default {
    name: 'AppMain',
    components: {
        ProductCard
    },
    data() {
        return {
            state, //state : state,//
        }
    },
    methods:{
        openModal(){
            this.open = true;
            console.log(this.open);
        },
        closeModal(){
            this.open = false;
            console.log(this.open);
        }
    },
    mounted(){
        this.state.getProducts('http://localhost:3000/products')
    }
};

</script>

<template>
    <main id="site_main">
        <div class="container">

            <div class="row row-cols-1 row-cols-sm-3">

                <ProductCard v-for="product in state.products" 
                :identifier="product.id" 
                :frontImage="product.frontImage"
                :backImage="product.backImage" 
                :brand="product.brand" 
                :itemName="product.itemName"
                :price="product.price" 
                :isInFavorites="product.isInFavorites" :badges="product.badges" 
                />

            </div>
            
        </div>

    
    </main>

</template>

<style lang="scss">
    @import '../assets/scss/partials/_main.scss';
</style>
