import { reactive } from "vue";
import axios from 'axios';

export const state = reactive({
    message: 'Hello Reactive World',
    //methods below
    
    getProducts(url){
        axios.get(url)
        .then(response => {
            this.products = response.data
        })
    
    }
})
