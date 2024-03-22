<script>

import { products } from '../objects.js';
import ProductCard from './ProductCard.vue';

export default {
    name: 'AppMain',
    components: {
        ProductCard
    },
    data() {
        return {
            products: products
        }
    }
};

</script>

<template>
    <main id="site_main">
        <div class="container">

            <div class="row row-cols-1 row-cols-sm-3">

                <ProductCard v-for="product in products" :identify="product.id" 
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
