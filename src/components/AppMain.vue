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

            <div class="row row-cols-1 row-cols-sm-3 row-cols-md-4">
                <ProductCard : />
            </div>



            <!-- <aside class="top model">
                <div class="hearts">
                    <div class="like">&hearts;</div>
                </div>
                <span class="discount">-30%</span>

                <img src="/public/img/2.webp" class="top model to_hover" alt="">
                <img src="/public/img/2b.webp" alt="" class="top model to_hide">
                <div class="brand">Guess</div>
                <div class="description"><strong>ROSES TEE</strong></div>
                <div class="price">
                    <span class="newprice"><strong>20,99 &euro;</strong></span>
                    <span class="oldprice"><del>29,99 &euro;</del></span>
                </div>
            </aside> -->

            <!-- <aside class="top-right model">
                <div class="hearts">
                    <div class="like">&hearts;</div>
                </div>
                <span class="discount">-30%</span>

                <img src="/public/img/3.webp" class="top-right model to_hover" alt="">
                <img src="/public/img/3b.webp" alt="" class="top-right model to_hide">
                <div class="brand">Come Zucchero Filato</div>
                <div class="description"><strong>VOGLIA DI COLORI PASTELLO</strong></div>
                <div class="price">
                    <span class="newprice"><strong>129,99 &euro;</strong></span>
                    <span class="oldprice"><del>184,99 &euro;</del></span>
                </div>
            </aside> -->

            <!-- <aside class="btm-left model">
                <div class="hearts">
                    <div class="like">&hearts;</div>
                </div>
                <span class="discount">-30%</span>
                <span class="eco">Sostenibilità</span>

                <img src="/public/img/4.webp" class="btm-left model to_hover" alt="">
                <img src="/public/img/4b.webp" alt="" class="btm-left model to_hide">
                <div class="brand">Levi's</div>
                <div class="description"><strong>TEE UNISEX</strong></div>
                <div class="price">
                    <span class="newprice"><strong>14,99 &euro;</strong></span>
                    <span class="oldprice"><del>29,99 &euro;</del></span>
                </div>
            </aside> -->

            <!-- <aside class="btm model">
                <div class="hearts">
                    <div class="like">&hearts;</div>
                </div>

                <img src="/public/img/5.webp" class="btm model to_hover" alt="">
                <img src="/public/img/5b.webp" alt="" class="btm model to_hide">
                <div class="brand">Maya Deluxe</div>
                <div class="description"><strong>STRIPE BODICE</strong></div>
                <div class="price">
                    <span class="newprice"><strong>99,99 &euro;</strong></span>
                </div>
            </aside> -->

            <!-- <aside class="btm-right model">
                <div class="hearts">
                    <div class="like">&hearts;</div>
                </div>
                <span class="eco">Sostenibilità</span>

                <img src="/public/img/6.webp" class="btm-right model to_hover" alt="">
                <img src="/public/img/6b.webp" alt="" class="btm-right model to_hide">
                <div class="brand">Esprit</div>
                <div class="description"><strong>MAGLIONE - BLACK</strong></div>
                <div class="price">
                    <span class="newprice"><strong>29,99 &euro;</strong></span>
                </div>
            </aside> -->

        </div>
    </main>

</template>

<style lang="scss">
@import '../assets/scss/partials/_main.scss';
</style>
