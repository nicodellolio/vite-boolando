<script>
import { state } from '../state.js';
import ProductCard from './ProductCard.vue';
import MyModal from './MyModal.vue';

export default {
    name: 'AppMain',
    components: {
        ProductCard,
        MyModal
    },
    data() {
        return {
            state, //state : state,//
            product: null,
            open: false,
        }
    },
    methods:{
        openModal(product){
            this.product = product;


            this.open = true;
            console.log(product.itemName);
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
                :product="product"
                :identifier="product.id" 
                :frontImage="product.frontImage"
                :backImage="product.backImage" 
                :brand="product.brand" 
                :itemName="product.itemName"
                :price="product.price" 
                :isInFavorites="product.isInFavorites" :badges="product.badges" 
                :description="product.description"
                @show-modal="openModal"
                />

            </div>
            
        </div>

        <div v-if="open">
            <MyModal :open="open" :product="product" />
        </div>
    </main>

</template>

<style lang="scss">
    @import '../assets/scss/partials/_main.scss';
</style>
